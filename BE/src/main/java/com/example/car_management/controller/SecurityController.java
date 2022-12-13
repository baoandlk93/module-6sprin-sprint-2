package com.example.car_management.controller;

import com.example.car_management.common.IEmailService;
import com.example.car_management.dto.IUserEmailDto;
import com.example.car_management.jwt.JwtTokenUtil;
import com.example.car_management.model.customer.Customer;
import com.example.car_management.model.decentralization.Role;
import com.example.car_management.model.decentralization.SocialResponse;
import com.example.car_management.model.decentralization.User;
import com.example.car_management.payload.reponse.MessageResponse;
import com.example.car_management.payload.request.LoginRequest;
import com.example.car_management.payload.request.LoginResponse;
import com.example.car_management.payload.request.ResetPassRequest;
import com.example.car_management.service.customer.impl.CustomerService;
import com.example.car_management.service.decentralization.IRoleService;
import com.example.car_management.service.decentralization.impl.MyUserDetailService;
import com.example.car_management.service.decentralization.impl.MyUserDetails;
import com.example.car_management.service.decentralization.impl.UserService;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@CrossOrigin("*")
@RequestMapping("api/public")
public class SecurityController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private IEmailService iEmailService;

    @Autowired
    private UserService userService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private IRoleService roleService;


    @Autowired
    private MyUserDetailService myUserDetailService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtTokenUtil.generateJwtToken(loginRequest.getUsername());
        MyUserDetails myUserDetails = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<String> roles = myUserDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        return ResponseEntity.ok(
                new LoginResponse(
                        jwt,
                        myUserDetails.getUsername(),
                        roles));
    }


    @PostMapping("/oauth/google")
    public ResponseEntity<?> google(@RequestBody SocialResponse jwtResponseSocial) throws IOException {
        final NetHttpTransport netHttpTransport = new NetHttpTransport();
        final JacksonFactory jacksonFactory = JacksonFactory.getDefaultInstance();
        GoogleIdTokenVerifier.Builder builder =
                new GoogleIdTokenVerifier.Builder(netHttpTransport, jacksonFactory)
                        .setAudience(Collections.singletonList("612774287153-uthnsrl25on17doe8413il68ebv9c969.apps.googleusercontent.com"));
        final GoogleIdToken googleIdToken = GoogleIdToken.parse(builder.getJsonFactory(), jwtResponseSocial.getToken());
        final GoogleIdToken.Payload payload = googleIdToken.getPayload();
        String email = payload.getEmail();
        Customer customer = customerService.findFakeMail(email);
        LoginResponse loginResponse = new LoginResponse();

        if (customer == null || customer.getUser() == null) {
            customer = new Customer();
            customer.setEmail(payload.getEmail());
            customer.setName((String) payload.get("name"));
            customer.setUser(new User(customer.getEmail(), null));

            userService.saveCreateGmail(customer.getUser());
            customerService.saveCreateGmail(customer);
            roleService.saveCreateGmail(customer.getEmail());

            loginResponse.setUsername(customer.getEmail());
            loginResponse.setAccessToken(jwtTokenUtil.generateJwtToken(customer.getEmail()));
            List<Role> roles = roleService.getRoleByUsername(customer.getEmail());
            List<String> nameRole = new ArrayList<>();
            for(Role role: roles) {
                nameRole.add(role.getName());
            }
            loginResponse.setRoles(nameRole);
            return ResponseEntity.ok(loginResponse);
        }

        User user = customer.getUser();
        if (user != null) {
            loginResponse.setAccessToken(jwtTokenUtil.generateJwtToken(customer.getEmail()));
            loginResponse.setUsername(customer.getEmail());
            List<Role> roles = roleService.getRoleByUsername(customer.getEmail());
            List<String> nameRole = new ArrayList<>();
            for(Role role: roles) {
                nameRole.add(role.getName());
            }
            loginResponse.setRoles(nameRole);
            return ResponseEntity.ok(loginResponse);
        }
        return ResponseEntity.ok(loginResponse);
    }

}

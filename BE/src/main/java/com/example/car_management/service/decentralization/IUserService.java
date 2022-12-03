package com.example.car_management.service.decentralization;

import com.example.car_management.dto.IUserEmailDto;
import com.example.car_management.model.decentralization.User;

import java.util.List;
import java.util.Optional;


public interface IUserService {
    String existsByUserName(String username);

    List<User> findAll();

    User findByUsername(String name);

    Optional<IUserEmailDto> findByEmail(String email);

    Optional<IUserEmailDto> findByUsernameDto(String username);

    void updatePassword(User user, String newPassword);

    void saveCreateGmail(User user);

    Optional<User> showUsername(String username);

}

package com.example.car_management.controller;

import com.example.car_management.dto.customer.ICustomerDto;
import com.example.car_management.model.car.Car;
import com.example.car_management.service.car.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/api/car")
@CrossOrigin("*")
public class CarRestController {
    @Autowired
    private ICarService service;


    @GetMapping("/list")
    public ResponseEntity<Page<Car>> getAllCar(@RequestParam(value = "name", defaultValue = "") String name,
                                               @PageableDefault Pageable pageable) {
        Page<Car> promotions = service.findAllCar(pageable, name);
        if (promotions.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(promotions, HttpStatus.OK);
        }
    }
}

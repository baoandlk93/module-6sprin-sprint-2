package com.example.car_management.controller;

import com.example.car_management.dto.ICarDto;
import com.example.car_management.model.car.Car;
import com.example.car_management.service.car.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/car")
@CrossOrigin("*")
public class CarRestController {
    @Autowired
    private ICarService service;


    @GetMapping("/list")
    public ResponseEntity<Page<ICarDto>> getAllCar(@RequestParam(value = "name", defaultValue = "") String name,
                                               @PageableDefault(value = 9, sort = "id") Pageable pageable) {
        Page<ICarDto> cars = service.findAllCar(pageable, name);
        if (cars.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(cars, HttpStatus.OK);
        }
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<ICarDto> getCar(@PathVariable int id) {
        Optional<ICarDto> car = service.findByIdDto(id);
        if (!car.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(car.get(), HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Car> deleteCar(@PathVariable int id){
        Optional<Car> car = service.findById(id);
        if (car.isPresent()){
            service.deleteCar(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}

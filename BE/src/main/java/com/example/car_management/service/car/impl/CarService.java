package com.example.car_management.service.car.impl;

import com.example.car_management.model.car.Car;
import com.example.car_management.repository.ICarRepository;
import com.example.car_management.service.car.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository repository;

    @Override
    public Page<Car> findAllCar(Pageable pageable, String name) {
        return repository.findAllCarByOther(pageable, name);
    }
}

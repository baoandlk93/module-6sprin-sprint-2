package com.example.car_management.service.car;

import com.example.car_management.model.car.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface ICarService {

    Page<Car> findAllCar(Pageable pageable, String name);
}

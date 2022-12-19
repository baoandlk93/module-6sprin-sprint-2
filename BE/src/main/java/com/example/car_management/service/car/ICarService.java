package com.example.car_management.service.car;

import com.example.car_management.dto.ICarDto;
import com.example.car_management.model.car.Brand;
import com.example.car_management.model.car.Car;
import com.example.car_management.model.car.Gear;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;


public interface ICarService {

    Page<ICarDto> findAllCar(Pageable pageable, String name);

    Optional<ICarDto> findByIdDto(int id);
    Optional<Car> findById(int id);

    void deleteCar(int id);

    List<Gear> gearList();

    List<Brand>brandList();

    List<ICarDto> findAllCarByCustomer(int id);
}

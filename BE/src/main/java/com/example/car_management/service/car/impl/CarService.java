package com.example.car_management.service.car.impl;

import com.example.car_management.dto.ICarDto;
import com.example.car_management.model.car.Brand;
import com.example.car_management.model.car.Car;
import com.example.car_management.model.car.Gear;
import com.example.car_management.repository.IBrandRepository;
import com.example.car_management.repository.ICarRepository;
import com.example.car_management.repository.IGearRepository;
import com.example.car_management.service.car.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository repository;

    @Autowired
    private IGearRepository gearRepository;

    @Autowired
    private IBrandRepository brandRepository;

    @Override
    public Page<ICarDto> findAllCar(Pageable pageable, String name) {
        return repository.findAllCarByOther(pageable, name);
    }

    @Override
    public Optional<ICarDto> findByIdDto(int id) {
        return repository.findByIdCar(id);
    }

    @Override
    public Optional<Car> findById(int id) {
        return repository.findCarById(id);
    }

    @Override
    public void deleteCar(int id) {
        repository.deleteCar(id);
    }

    @Override
    public List<Gear> gearList() {
        return gearRepository.findAll();
    }

    @Override
    public List<Brand> brandList() {
        return brandRepository.findAll();
    }

    @Override
    public List<ICarDto> findAllCarByCustomer(int id) {
        return null;
    }
}

package com.example.car_management.service.car.impl;

import com.example.car_management.model.car.Brand;
import com.example.car_management.repository.IBrandRepository;
import com.example.car_management.service.car.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService implements IBrandService {
    @Autowired
    private IBrandRepository repository;

    @Override
    public List<Brand> findALl() {
        return repository.findAll();
    }
}

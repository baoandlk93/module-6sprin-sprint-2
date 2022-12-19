package com.example.car_management.service.car.impl;

import com.example.car_management.model.car.Gear;
import com.example.car_management.repository.IGearRepository;
import com.example.car_management.service.car.IGearService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GearService implements IGearService {
    @Autowired
    private IGearRepository repository;
    @Override
    public List<Gear> findAll() {
        return repository.getListGear();
    }
}

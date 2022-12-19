package com.example.car_management.service.contract.impl;

import com.example.car_management.dto.IContractDto;
import com.example.car_management.model.OrderCar;
import com.example.car_management.model.car.Car;
import com.example.car_management.model.customer.Customer;
import com.example.car_management.repository.IContractRepository;
import com.example.car_management.service.contract.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContractService implements IContractService {
    @Autowired
    private IContractRepository repository;
    @Override
    public void likeCar(Car car, Customer customer, int likeStatus) {
        repository.likeCar(car,customer,likeStatus);

    }

    @Override
    public void unLike(Car car, Customer customer, int likeStatus) {
        repository.unLikeCar(car,customer,likeStatus);
    }

    @Override
    public void addNew(Car car, Customer customer, String date, int likeStatus) {
        repository.addContract(car, customer, date, likeStatus);
    }

    @Override
    public Optional<OrderCar> findById(int id) {
        return repository.findById(id);
    }

    @Override
    public List<IContractDto> findContractByCustomerId(int id) {
        return repository.findContractByCustomerId(id);
    }
}

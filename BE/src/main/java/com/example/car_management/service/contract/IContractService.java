package com.example.car_management.service.contract;

import com.example.car_management.dto.IContractDto;
import com.example.car_management.model.OrderCar;
import com.example.car_management.model.car.Car;
import com.example.car_management.model.customer.Customer;

import java.util.List;
import java.util.Optional;

public interface IContractService {
    void likeCar(Car car, Customer customer, int likeStatus);

    void unLike(Car car, Customer customer, int likeStatus);

    void addNew(Car car, Customer customer, String date, int likeStatus);

    Optional<OrderCar> findById(int id);

    List<IContractDto> findContractByCustomerId(int id);
}

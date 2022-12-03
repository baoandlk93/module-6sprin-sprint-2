package com.example.car_management.model;

import com.example.car_management.model.car.Car;
import com.example.car_management.model.customer.Customer;

import javax.persistence.*;

@Entity
public class OrderCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String startDate;
    private boolean status;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "car_id",referencedColumnName = "id")
    private Car car;

}

package com.example.car_management.service.customer;

import com.example.car_management.model.customer.CustomerType;


import java.util.List;

public interface ICustomerTypeService {
    List<CustomerType> findAllCustomerType();

}
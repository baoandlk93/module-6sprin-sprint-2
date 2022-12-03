package com.example.car_management.service.customer.impl;

import com.example.car_management.model.customer.CustomerType;
import com.example.car_management.repository.ICustomerTypeRepository;
import com.example.car_management.service.customer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements ICustomerTypeService {

    @Autowired
    private ICustomerTypeRepository icustomerTypeRepository;

    @Override
    public List<CustomerType> findAllCustomerType() {
        return icustomerTypeRepository.findAllCustomerType();
    }
}
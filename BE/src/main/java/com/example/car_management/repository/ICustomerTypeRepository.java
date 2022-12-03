package com.example.car_management.repository;

import com.example.car_management.model.customer.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICustomerTypeRepository extends JpaRepository<CustomerType, Integer> {

    @Query(value = "select id, name, is_delete" +
            " from customer_type  where is_delete = 0", nativeQuery = true)
    List<CustomerType> findAllCustomerType();
}
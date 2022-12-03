package com.example.car_management.repository;

import com.example.car_management.model.car.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IBrandRepository extends JpaRepository<Brand,Integer> {
}

package com.example.car_management.repository;

import com.example.car_management.model.car.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface ICarRepository extends JpaRepository<Car, Integer> {
    @Query(value = "SELECT * FROM car WHERE car.is_delete = 0 AND car.name LIKE %:name%", nativeQuery = true)
    Page<Car> findAllCarByOther(Pageable pageable, @Param("name") String name);
}

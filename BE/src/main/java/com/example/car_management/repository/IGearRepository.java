package com.example.car_management.repository;

import com.example.car_management.model.car.Gear;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IGearRepository extends JpaRepository<Gear, Integer> {

    @Query(value = "select * from gear", nativeQuery = true)
    List<Gear> getListGear();
}

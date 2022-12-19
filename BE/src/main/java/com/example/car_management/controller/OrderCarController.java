package com.example.car_management.controller;

import com.example.car_management.dto.ContractDto;
import com.example.car_management.dto.IContractDto;
import com.example.car_management.model.OrderCar;
import com.example.car_management.model.car.Car;
import com.example.car_management.model.customer.Customer;
import com.example.car_management.service.car.ICarService;
import com.example.car_management.service.contract.IContractService;
import com.example.car_management.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/order/")
@CrossOrigin("*")
public class OrderCarController {
    @Autowired
    private IContractService service;

    @GetMapping("like")
    public ResponseEntity<ContractDto> likeCar(@RequestBody ContractDto contractDto) {
        Optional<OrderCar> orderCar = service.findById(contractDto.getId());
        Car car = contractDto.getCar();
        Customer customer = contractDto.getCustomer();
        Date date = new Date();
        int status = 0;
        if (contractDto.isStatus()) {
            status = 1;
        }
        if (orderCar.isPresent()) {
            service.likeCar(car, customer, status);
        } else {
            service.addNew(car, customer, date.toString(), status);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("list/{id}")
    public ResponseEntity<List<IContractDto>> listContract(@PathVariable int id) {
        List<IContractDto> contractDtoList = service.findContractByCustomerId(id);
        if (contractDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(contractDtoList, HttpStatus.OK);
        }
    }
}

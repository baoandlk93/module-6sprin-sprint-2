package com.example.car_management.repository;

import com.example.car_management.dto.ContractDto;
import com.example.car_management.dto.IContractDto;
import com.example.car_management.model.OrderCar;
import com.example.car_management.model.car.Car;
import com.example.car_management.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
@Transactional
public interface IContractRepository extends JpaRepository<OrderCar, Integer> {
    @Query(value = "update order_car " +
            "set like_status = :likeStatus " +
            "where customer_id =:#{#customer.id} " +
            "and car_id =:#{#car.id}", nativeQuery = true)
    void likeCar(@Param("car") Car car,
                 @Param("customer") Customer customer,
                 @Param("likeStatus") int likeStatus);

    @Query(value = "update order_car " +
            "set like_status = :likeStatus " +
            "where customer_id =:#{#customer.id} " +
            "and car_id =:#{#car.id}", nativeQuery = true)
    void unLikeCar(@Param("car") Car car,
                   @Param("customer") Customer customer,
                   @Param("likeStatus") int likeStatus);

    @Modifying
    @Query(value = "insert into order_car(start_date,like_status,customer_id,car_id) " +
            "values (:#{#date},:likeStatus,:#{#customer.id},:#{#car.id})", nativeQuery = true)
    void addContract(@Param("car") Car car,
                     @Param("customer") Customer customer,
                     @Param("date") String date,
                     @Param("likeStatus") int likeStatus
    );

    @Query(value = "select order_car.id as id, " +
            "order_car.customer_id as customerId, " +
            "order_car.car_id as carId, car.name AS name, " +
            "car.accreditation AS accreditation, " +
            "car.color AS color, " +
            "car.designs AS designs, " +
            "car.drive_shaft AS driveShaft," +
            "car.engine_displacement AS engineDisplacement," +
            "car.fuel AS fuel, " +
            "car.number_of_mile_traveled AS numberOfMileTraveled," +
            "car.number_of_seat AS numberOfSeat," +
            " car.origin AS origin, " +
            "car.picture AS picture, " +
            "car.price AS price, " +
            "car.year AS year,car.is_delete, " +
            "car.status AS status, " +
            "car.brand_id, " +
            "car.gear_id, " +
            "brand.name AS brandName," +
            "gear.name AS gearName, " +
            "customer.name as customerName, " +
            "customer.day_of_birth as dayOfBirth , " +
            "customer.gender as gender," +
            "customer.id_card as idCard, " +
            "customer.email as email, " +
            "customer.address as address, " +
            "customer.phone_number as phoneNumber, " +
            "user.username as username, " +
            "user.`password` as password, " +
            "customer.customer_type_id as customerTypeId   " +
            "from order_car " +
            "join car on car.id = order_car.car_id " +
            "join brand on car.brand_id = brand.id " +
            "join gear on car.gear_id = gear.id " +
            "join customer on customer.id = order_car.customer_id " +
            "join user on customer.username = user.username " +
            "where order_car.customer_id =:id", nativeQuery = true,
            countQuery = "select count(*) " +
                    "from order_car " +
                    "join car on car.id = order_car.car_id " +
                    "join brand on car.brand_id = brand.id " +
                    "join gear on car.gear_id = gear.id " +
                    "join customer on customer.id = order_car.customer_id " +
                    "join user on customer.username = user.username " +
                    "where order_car.customer_id =:id")
    List<IContractDto> findContractByCustomerId(int id);
}

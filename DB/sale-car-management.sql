drop database car_shop_management;
create database if not exists car_shop_management;
use car_shop_management;
create table if not exists user(
	username varchar(30) primary key,
    password varchar(200),
    is_delete bit default 0
);

create table  if not exists role(
	id int primary key auto_increment,
    name varchar(30),
    is_delete bit default 0
);

create table if not exists user_role(
	username varchar(50),
    role_id int,
    is_delete bit default 0,
    foreign key(username) references user(username),
    foreign key(role_id) references role(id),
    primary key(username, role_id)
);
create table brand(
id int auto_increment primary key,
name varchar(45)
);
create table if not exists customer_type(
	id int primary key auto_increment,
    name varchar(30),
    is_delete bit default 0
);


create table if not exists customer(
	id int primary key auto_increment,
	name varchar(30),
	is_delete bit default 0,
	day_of_birth varchar(30),
	gender int,
	id_card varchar(12),
	email varchar(100),
	address varchar(200),
	phone_number varchar(15),
	username varchar(30) unique,
	customer_type_id int,
	foreign key (username) references user(username),
	foreign key (customer_type_id) references customer_type(id)
);
create table if not exists gear(
id int primary key auto_increment,
name varchar(45)
);
create table car(
id int auto_increment primary key,
name varchar(45),
brand_id int,
gear_id int,
color varchar(45),
price double,
year int,
designs varchar(45),
number_of_seat int,
picture text,
status bit default 1,
is_delete bit default 0,
foreign key(brand_id) references brand(id),
foreign key(gear_id) references gear(id)
);

create table if not exists order_car(
id int primary key auto_increment,
start_date datetime,
status bit default 1,
customer_id int,
car_id int,
foreign key(customer_id) references customer(id),
foreign key(car_id) references car(id)
);
create table if not exists blog(
id int primary key auto_increment,
content text,
date_write datetime,
car_id int,
is_delete bit default 0,
foreign key(car_id) references car(id)
);

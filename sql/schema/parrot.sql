drop database if exists parrot ;
create database parrot;
use parrot;

create table user (
	user_id varchar(20) primary key not null,
    password varchar(20),
    first_name varchar(50),
    last_name varchar(50),
    tel_no char(10)
);

create table bill (
	bill_id char(23) primary key not null,
    amount float,
    description varchar(200),
    pay_type varchar(100),
    created_on datetime,
    payer_id varchar(20),
    receipt_id char(23)
);

create table receipt (
	receipt_id char(23) primary key not null,
    total_amount float,
    description varchar(100),
    first_created_on varchar(50),
    paid_on varchar(50)
);

create table bill_payment (
	payee_id varchar(20) not null,
    bill_id char(23) not null,
    paid_on varchar(50),
    is_paid bool,
    primary key (payee_id, bill_id)
);

create table receipt_creation (
	user_id varchar(20) not null,
    receipt_id char(23) not null,
    created_on varchar(50),
    primary key (user_id, receipt_id)
);
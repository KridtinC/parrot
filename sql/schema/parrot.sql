drop database if exists parrot ;
create database parrot;

create table parrot.bill (
	bill_id char(10) primary key not null,
    payer_id char(10),
    payee_id char(10),
    amount float,
    pay_type varchar(100)
);

create table parrot.user (
	user_id char(10) primary key not null,
    first_name varchar(50),
    last_name varchar(50)
);
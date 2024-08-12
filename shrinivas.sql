-- SELECT VERSION(), CURRENT_DATE; 
-- SHOW databases; -- used to show all present databases
-- create database shrinivas_db; 
-- drop database shrinivas;

USE shrinivas_db;
-- SHOW tables;
-- CREATE TABLE account(
-- account_number char(10),
-- balance integer);
-- desc account;

-- CREATE TABLE pet (
-- name varchar(20),
-- owner varchar(20),
-- species varchar(20),
-- sex char(1),
-- birth DATE , death DATE);

-- SHOW tables;
-- desc pet;
-- INSERT INTO pet VALUES ('zoro','Shri','street','F','2020/08/12',NULL); 
-- select * from pet used to get data from table
create table department 
(dept_name varchar (20),
building   varchar (15),
budget numeric (12,2), 
primary key (dept_name)); 
insert into department values ("it","soc","200000");
select * from department ;
create table course 
(course_id   varchar (7),
title       varchar (50),
dept_name   varchar (20),
credits      numeric (2,0),
primary key (course_id), 
foreign key (dept_name) references department); 

create table instructor(
ID varchar(5),
name varchar(20) not null,
dept_name varchar(20),
salary numeric(8,2),
primary key (ID),
foreign key(dept_name) references department);

create table section(
course_id varchar(8),
sec_id varchar(8),
semester varchar(6),
year numeric(4,0),
building varchar(15),
room_number varchar(7),
time_slot_id varchar(4),
primary key (course_id,sec_id,semester,year),
foreign key (course_id) references course);

create table teaches (
ID varchar(5),
course_id varchar(8),
sec_id varchar(8),
semester varchar(6),
year numeric(4,0),
primary key (ID,course_id,sec_id,semester,year),
foreign key (ID) references instructor,
foreign key (course_id,sec_id,semester,year) references section);

show tables;


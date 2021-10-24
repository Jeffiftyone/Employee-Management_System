DROP DATABASE if exists employees_db;
CREATE DATABASE employees_db;
USE employees_db;

DROP TABLE IF EXISTS Department;
DROP TABLE IF EXISTS Roles;
DROP TABLE IF EXISTS Employees;


CREATE TABLE Department(
id int not null auto_increment primary key,
deptname varchar(30) not null
);

CREATE TABLE Roles(
id int not null auto_increment primary key,
department_id int,
title varchar(30),
salary int,
foreign key(department_id) 
references Department(id)
ON DELETE CASCADE);

CREATE TABLE Employees(
id int not null auto_increment primary key,
role_id int, 
first_name varchar(30),
last_name varchar(30),
manager_id int,
foreign key(role_id)
references Roles(id),
foreign key(manager_id)
references Employees(id)
);


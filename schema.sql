DROP DATABASE IF EXISTS  employee_trackDB;
CREATE DATABASE employee_trackDB;

USE employee_trackDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR (30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR (30) NOT NULL,
  salary DECIMAL,
  FOREIGN KEY (id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR (30) NOT NULL,
  last_name VARCHAR(30)NOT NULL ,
  FOREIGN KEY(id) REFERENCES role(id),
  manager_id INT 
);
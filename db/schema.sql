DROP DATABASE IF EXISTS hr_db;
CREATE DATABASE hr_db;

USE hr_db;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  depName VARCHAR(75) NOT NULL
);

CREATE TABLE employee_role (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(75) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL, 
  FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT DEFAULT NULL,
  FOREIGN KEY (role_id)
    REFERENCES employee_role(id)
    ON DELETE CASCADE, 
  FOREIGN KEY (manager_id)
    REFERENCES employee(id)

);

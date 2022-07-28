USE hr_db;

INSERT INTO department (depName)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Human Resources"),
       ("Marketing"),
       ("Security"),
       ("Quality Assurance"),
       ("Customer Service"),
       ("Executive");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 120000, 2),
       ("Software Engineer", 100000, 2),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 130000, 4),
       ("Lawyer", 120000, 4),
       ("HR Lead", 130000, 5),
       ("HR Representative", 100000, 5),
       ("Marketing Lead", 130000, 6),
       ("Marketing Specialist", 100000, 6),
       ("Security Lead", 130000, 7),
       ("Security Specialist", 100000, 7),
       ("Quality Assurance Lead", 130000, 8),
       ("Quality Assurance Specialist", 100000, 8),
       ("Customer Service Lead", 130000, 9),
       ("Customer Service Representative", 100000, 9),
       ("CEO", 200000, 10),
       ("CFO", 200000, 10),
       ("COO", 200000, 10);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jonathan", "Knight", 10, 1),
       ("Megan", "Smith", 10, 2),
       ("John", "Doe", 3, 17),
       ("Jane", "Doe", 4, 3),
       ("Michael", "Scott", 5, 17),
       ("Dwight", "Schrute", 6, 17),
       ("Jim", "Halpert", 7, 6),
       ("Pam", "Beesly", 8, 17),
       ("Andy", "Bernard", 9, 17),
       ("Stanley", "Hudson", 10, 9),
       ("Angela", "Martin", 11, 17),
       ("Kevin", "Malone", 12, 11),
       ("Oscar", "Martinez", 13, 17),
       ("Toby", "Flenderson", 14, 13),
       ("Kelly", "Kapoor", 15, 17),
       ("Ryan", "Howard", 16, 15),
       ("Robert", "California", 17, 17),
       ("Phyllis", "Vance", 18, 17),
       ("Creed", "Bratton", 19, 17);
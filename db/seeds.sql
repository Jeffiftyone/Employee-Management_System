insert into Department (deptid,deptname)
values(1,"Sales"),
(2,"Engineering"),
(3,"Finance"),
(4,"Legal");

insert into Roles (roleid,deptid,title,salary)
values(1,1,"Sales Lead", 100000),
(2,1,"Salesperson", 80000),
(3,2,"Lead Engineer", 150000),
(4,2,"Software Engineer", 150000),
(5,3,"Account Manager", 160000),
(6,3,"Accountant", 125000),
(7,4,"Legal Team Lead", 250000),
(8,4,"Lawyer", 190000);

insert into Employees (id, first_name, last_name,role_id, manager_id)
values(1,"John","Doe",1,null),
(2,"Mike","Chan",2,1),
(3,"Ashley","Rodriguez",3,null),
(4,"Kevin","Tupik",4,3),
(5,"Kunal","Singh",5, null),
(6,"Malia","Brown",6,5),
(7,"Sarah","Lourd",7,null),
(8,"Tom","Allen",8,7);


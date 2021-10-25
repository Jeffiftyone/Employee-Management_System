-- view all employees
SELECT Employees1.first_name, Employees1.last_name, Roles.title, Department.deptname AS department, Roles.salary,concat(Employees2.first_name,' ',Employees2.last_name) AS Manager
FROM Employees AS Employees1
JOIN Roles ON Employees1.role_id = Roles.id
JOIN Department ON Roles.department_id = Department.id 
left JOIN  Employees AS Employees2 ON Employees2.id=Employees1.manager_id;

--ADD employee
INSERT INTO TABLE Roles(id,department_id,title,salary)
VALUES();

--get managers
SELECT Employees.first_name, Employees.last_name FROM Employees
WHERE manager_id IS NULL;

--get roles
SELECT Roles.title FROM Roles;
SELECT Roles.id FROM Roles;
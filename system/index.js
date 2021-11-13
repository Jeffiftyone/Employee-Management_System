const inquirer = require('inquirer');
const {db}= require('./connection');
const questions = require('./questions');

// const mainMenu = 
//     {
//         type:'list',
//         name:'mainSelect',
//         message:'What would you like to do?',
//         default:'Use Arrow Keys',
//         choices:['View All Employees','Add Employee','Update Employee Role','View all Roles','Add Role','View all Departments','Add Department','Quit'],
//     }

  


function getRoles(result){
    questions[4].choices=[];
    result.forEach(element => {
        questions[4].choices.push(element.id+':'+element.title);
    });

}

function getManagers(){

}

function quitApp(){
    process.exit();
}


async function employeeManagementSystem(){
    console.log('Welcome to the Employee Management System');
   
   const userChoice = await inquirer.prompt(questions.mainMenu);
         
        switch (userChoice.choice){
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                 break;
            case 'Update Employee Role':
                updateRole();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'View All Departments':
                console.log('View all departments');
                viewAllDepartments();
                    break;
            case 'Add Department':
                console.log('Adding a Department');
                break;
            case 'Quit':
                console.log('Exiting application');
                quitApp();
                break;
}
    
}

//view all employees
function viewAllEmployees(){
    console.log('View all employees chosen');
    //Log all employees with All info shown
    db.query(`SELECT Employees1.first_name, Employees1.last_name, Roles.title, Department.deptname AS department, Roles.salary,concat(Employees2.first_name,' ',Employees2.last_name) AS Manager
    FROM Employees AS Employees1
    JOIN Roles ON Employees1.role_id = Roles.id
    JOIN Department ON Roles.department_id = Department.id 
    left JOIN  Employees AS Employees2 ON Employees2.id=Employees1.manager_id`, function(err, results){
    console.table(results);
    employeeManagementSystem();
    });
  
}

//add employee
async function addEmployee(){
    //get managers list from database
    db.query(`SELECT id as value, CONCAT(first_name," ",last_name) as name FROM Employees
    WHERE manager_id IS NULL`, async(err, managers)=>{
        //get the roles list from database
        db.query(`SELECT id as value, title as name FROM Roles`, async(err,roles)=>{
            //get new employee info from user
            const addEmp = await inquirer.prompt(questions.addEmployee(roles,managers));
            console.log(addEmp);
            db.query(`INSERT INTO Employees SET ?`, addEmp, function(err){
                if (err) throw err;
                console.log("Employee successfully added!")
                employeeManagementSystem();
            });
        })
    
    })
    
}

//update Employee Role
async function updateRole() {
    //get employee list from database
    db.query(`SELECT id as value, CONCAT(first_name," ",last_name) as name FROM Employees`, async(err,employees)=>{
        //get roles list from database
        db.query(`SELECT id as value, title as name FROM Roles`, async(err,roles)=>{
            //get params from user
            const updateEmp = await inquirer.prompt(questions.updateRole(employees,roles));
            // console.log(updateEmp);
            // console.log(updateEmp.id);
            // console.log(updateEmp.role_id);
             db.query(`UPDATE Employees SET role_id=? WHERE id= ?`, [updateEmp.role_id, updateEmp.id], function(err){
                 if (err) throw err;
                 console.log("Role successfully updated!")
                 employeeManagementSystem();
             });
        })
    });

}

//View all Roles
function viewAllRoles(){
    db.query("SELECT * FROM Roles", function (err, results) {
        // Log all results of the SELECT statement
        console.table(results);
        employeeManagementSystem();
    })
}
//Add role
async function addRole(){
    //get role data from user
    // const newRole = await inquirer.prompt(questions.addRole);
    // console.log(newRole)
    
    db.query(`SELECT id as value, deptname as name FROM Department`, async(err, departments)=>{
        const newRole = await inquirer.prompt(questions.addRole(departments));
        console.log(newRole)
        db.query(`INSERT INTO Roles SET ?`, newRole, function(err){
            if (err) throw err;
            console.log("Role successfully updated!")
            employeeManagementSystem();
        })
    })
}

//View all Departments
function viewAllDepartments(){
    db.query("SELECT * FROM Department", function (err, results) {
        // Log all results of the SELECT statement
        console.table(results);
        employeeManagementSystem();
    })
}

//Add Department

module.exports={employeeManagementSystem}
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT =  3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'password',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);


//inquirer
//all inquirer questions
const menu = [
    {
        type:'list',
        name:'mainSelect',
        message:'What would you like to do?',
        default:'Use Arrow Keys',
        choices:['View All Employees','Add Employee','Update Employee Role','View all Roles','Add Role','View all Departments','Add Department','Quit'],
    },
  ];

  const addEmployee =[
      {
        message:`What is the Employee's First Name?`,
        type:'input',
        name:'empfname',
    },
    {
        message:`What is the Employee's Last Name?`,
        type:'input',
        name:'emplname',
    },
    {
        message:`What is their Role?`,
        type:'input',
        name:'empfname',
    },
    {
        message:`Who is this Employee's Manager?`,
        type:'input',
        name:'empfname',
    }
];

const addRole =[
    {
      message:`What is the name of the role?`,
      type:'input',
      name:'rolename',
  },
  {
      message:`What is the Salary of the Role?`,
      type:'input',
      name:'rolesalary',
  },
  {
      message:`Which Department does the Role belong to?`,
      type:'input',
      name:'roledept',
  }
];

function employeeManagementSystem(){
    console.log('Welcome to the Employee Management System');
    inquirer.prompt(menu).then((data)=>{
         const choice =`${data.mainSelect}`;
        switch (choice){
            case 'View All Employees':
                console.log('View all employees chosen');
                db.query(``)
                break;
            case 'Add Employee':
                console.log('Add Employee chosen');
                 break;
            case 'Update Employee Role':
                console.log('Update role chosen');
                break;
            case 'View all Roles':
                console.log('View all roles chosen');
                break;
            case 'Add Role':
                console.log('Adding a role');
                break;
            case 'View all Departments':
                console.log('View all departments');
                    break;
            case 'Add Department':
                console.log('Adding a Department');
                break;
            case 'Quit':
                console.log('Exiting application');
                break;
}
    });
}


function init(){
    console.log('Welcome to the Employee Management System');
    const ems= employeeManagementSystem();
}


 init();
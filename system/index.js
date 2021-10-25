const inquirer = require('inquirer');
const {db}= require('./connection');
const {viewAllEmployees,addEmployee}=require('./employee'); 


//inquirer
//inquirer questions
const menu = [
    {
        type:'list',
        name:'mainSelect',
        message:'What would you like to do?',
        default:'Use Arrow Keys',
        choices:['View All Employees','Add Employee','Update Employee Role','View all Roles','Add Role','View all Departments','Add Department','Quit'],
    },
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

function quitApp(){
    process.exit();
}

function employeeManagementSystem(){
    console.log('Welcome to the Employee Management System');
    inquirer.prompt(menu).then((data)=>{
         const choice =`${data.mainSelect}`;
        switch (choice){
            case 'View All Employees':
                console.log('View all employees chosen');
                viewAllEmployees();
                break;
            case 'Add Employee':
                console.log('Add Employee chosen');
                addEmployee();
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
                quitApp();
                break;
}
    });
}



module.exports={employeeManagementSystem}
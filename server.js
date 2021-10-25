const express = require('express');
const {connection} = require('./system/connection');
const {employeeManagementSystem} =  require('./system/index');
const PORT =  3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


function init(){
    console.log('Welcome to the Employee Management System');
     const ems=employeeManagementSystem();
}


 init();
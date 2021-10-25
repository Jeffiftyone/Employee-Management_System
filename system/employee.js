const {db}= require('./connection');
const inquirer = require('inquirer');
//inquirer questions
const managerlist=[];
const manageridlist=[];
const managerid="";
const roleidlist=[];
const rolelist=[];
const roleid="";

const addEmpQuestions =[
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
    message:`Who is this Employee's Manager?`,
    type:'list',
    name:'managername',
    choices:['manager1','manager2'],
},
{
    message:`What is this Employee's Role?`,
    type:'list',
    name:'roletitle',
    choices:['role1','role2'],
},]
//view all employees
function viewAllEmployees(){
    console.log('View all employees chosen');
    db.query(`SELECT Employees1.first_name, Employees1.last_name, Roles.title, Department.deptname AS department, Roles.salary,concat(Employees2.first_name,' ',Employees2.last_name) AS Manager
    FROM Employees AS Employees1
    JOIN Roles ON Employees1.role_id = Roles.id
    JOIN Department ON Roles.department_id = Department.id 
    left JOIN  Employees AS Employees2 ON Employees2.id=Employees1.manager_id`, function(err, results){
    console.table(results);
    });
}

function addEmployee(){
    console.log('add employee chosen');
    inquirer.prompt(addEmpQuestions).then((data)=>{
        //assign role
        console.log(data)
        });
        //assign manager
 
 }

module.exports={viewAllEmployees,addEmployee};
const {db}= require('./connection');


db.query(`SELECT Roles.title FROM Roles;`,function(err, results){
    rolelist=results;
    });
db.query(`SELECT Roles.id FROM Roles;`,function(err, results){
    roleidlist=results;
    });
db.query(`SELECT Employees.first_name, Employees.last_name FROM Employees
    WHERE manager_id IS NULL;`,function(err, results){
    managerlist=results;
    });
db.query(`SELECT Employees.id FROM Employees WHERE manager_id IS NULL;`,function(err, results){
});

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
    choices:managerlist,
},
{
    message:`What is this Employee's Role?`,
    type:'list',
    name:'roletitle',
    choices:rolelist,
}

// ];

// db.query(`SELECT Employees.first_name, Employees.last_name FROM Employees
// WHERE manager_id IS NULL;`,function(err, results){
//     console.table(results);
//     managerlist=results;
// });
// db.query(`SELECT Employees.id FROM Employees WHERE manager_id IS NULL;`,function(err, results){
// console.table(results);
// });
// inquirer.prompt(managerQuestion).then((managerdata)=>{
// managerid=manageridlist[(managerQuestion.choices.indexOf(`${managerdata.managername}`))];
// console.log('added manager');
// });
// });


// function addEmployee(){

//     inquirer.prompt(addEmpQuestions).then((data)=>{
//         //assign role
//         console.log(data)
//         });
//         //assign manager
 
//  }
        
//         db.query(`INSERT INTO TABLE Employees(NULL, first_name, last_name,role_id, manager_id)
//         VALUES("${data.empfname}","${data.emplname}","${managerid}");`);
//         console.log(`manager added "${data.empfname}","${data.emplname}","${roleid}","${managerid}" `)
//     });

// }
//update employee role

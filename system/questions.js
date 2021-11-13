module.exports = {
    mainMenu: {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add a Role",
            "Add Department",
            "View All Departments",
            "View Total Utilized Budget",
            "Quit"
        ]
    },
    addEmployee: (roles, managers) => [
        {
            type: "input",
            message: "What is your employee's first name?",
            name: "first_name",
        },
        {
            type: "input",
            message: "What is your employee's last name?",
            name: "last_name",
        },
        {
            type: "list",
            message: "What is your employee's role?",
            name: "role_id",
            choices: roles
        },
        {
            type: "list",
            message: "Who is your employee's manager?",
            name: "manager_id",
            choices: managers
        }
    ],
    addDepartment: {
        type: "input",
        message: "What is the name of your department?",
        name: "deptname",
    },
    addRole: (departments) => [
        {
            type: "input",
            message: "What is the title of your new role?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the salary for this role?",
            name: "salary",
        },
        {
            type: "list",
            message: "What is the department id for this role?",
            name: "department_id",
            choices: departments
        }
    ],

    updateRole: (employees, roles)=>[
        {
        type: "list",
        message: "Which Employee would you like to update?",
        name: "id",
        choices: employees,
    },
    {
        type: "list",
        message: "What Role would you like to give them?",
        name: "role_id",
        choices: roles,
    }
],
    viewBudget:(departments)=> [
        {
        type:"list",
        message:"Which Departent's Budget would you like to view?",
        name:"id",
        choices:departments,
    }
]
    
 
}
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
            "Quit"
        ]
    },
    addEmployee: (roles, managers) => [{
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
            message: "What is your employee's roleID?",
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
        name: "department_name",
    },
    addRole: [{
            type: "input",
            message: "What is the title of your new role?",
            name: "titleRole",
        },
        {
            type: "input",
            message: "What is the salary for this role?",
            name: "salary",
        },
        {
            type: "input",
            message: "What is the department id for this role?",
            name: "departmentIDrole",
        }
    ],
 
}
// Company Name Union Aerospace Corporation 
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
console.table([
    {
        name: 'test',
        age: 30
    },
    {
        name: 'mike',
        age: 18
    }
]);



const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'hr_db'
    },
    console.log(`Connected to the hr_db database.`)
);



const init = async () => {
    const mainMenu = await inquirer.prompt(
        [{
            type: 'list',
            name: 'menuHR',
            message: 'Welcome to the Union Aerospace Corporation (UAC) Employee Database Management Program, please select an option, features marked with (x) are still not fully initialized will end program:',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role(x)', 'View All Roles', 'Add Role(x)', 'View All Departments', 'Add Departments(x)', 'Exit']
        }]

    )
    console.log(mainMenu.menuHR)
    if (mainMenu.menuHR === 'View All Employees') {
        showEmployees();
    } else if (mainMenu.menuHR === 'View All Roles') {
        showRoles();
    } else if (mainMenu.menuHR === 'View All Departments') {
        showDepartments();
    } else if (mainMenu.menuHR === 'Add Employee') {
        addEmployees();
    } else if (mainMenu.menuHR === 'Add Role') {
        addRole();
    } else if (mainMenu.menuHR === 'Exit') {
        console.log("You have exited the program!");
        process.exit();
    } else {

    }
};

function showEmployees() {
    db.connect(function (err) {
        if (err) {
            throw err;
        } else {
            const showTableEmp = "SELECT * FROM employee"
            db.query(showTableEmp, function (err, results, fields) {
                if (err) throw err;
                const table = cTable.getTable(results)
                console.log(table);
            })
            init();
        }
    })
    
}

async function addEmployees() {
    const newEmployee = await inquirer.prompt(
        [
            { //new employee questions
                type: 'input',
                name: 'firstName',
                message: 'Enter the new hires first name less than 45 characters.'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the new hires last name less than 45 characters.'
            },
            {
                type: 'list',
                name: 'role',
                message: 'Enter the new hires role.',
                choices: ['Sales', 'Engineering', 'Finance', 'Legal', 'Human Resources', 'Marketing', 'Security', 'Quality Assurance', 'Customer Service', 'Executive']
            },
            {
                type: 'number',
                name: 'roleId',
                message: 'Create a 5 digit employee role Id'
            }
        ]
    )

    console.log(newEmployee);

    db.connect(function (err) {
        if (err) {
            throw err;

        } else {

            db.query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)', [newEmployee.firstName, newEmployee.lastName, newEmployee.role, newEmployee.roleId], function (err, results, fields) {
                if (err) throw err;
                console.table(results, ['First Name', 'Last Name', 'Role', 'Employee ID#'])
            });
        }
        init(); 
    })

}


function showRoles() {
    db.connect(function (err) {
        if (err) {
            throw err;
        } else {
            const showTableEmp = "SELECT * FROM employee_role"
            db.query(showTableEmp, function (err, results, fields) {
                if (err) throw err;
                const table = cTable.getTable(results)
                console.log(['Role', 'Salary', 'Department Id #'], table);
                
            })
            init();
        }
    })
    
}

function showDepartments() {
    db.connect(function (err) {
        if (err) {
            throw err;
        } else {
            const showTableEmp = "SELECT depName FROM department"
            db.query(showTableEmp, function (err, results, fields) {
                if (err) throw err;
                console.table(results, ['Departments:'])
            });
        }
    })
    init();
}



init();


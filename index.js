// Company Name Union Aerospace Corporation 
const mysql = require('mysql2');
// const mysqlx = require('@mysql/xdevapi')
const inquirer = require('inquirer');
const path = require('path');
const { inherits } = require('util');
// const bodyParser = require('body-parser');
// const json2csvParser = require('json2csv').Parser;

const cTable = require('console.table');



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
            message: 'Welcome to the Union Aerospace Corporation (UAC) Employee Database Management Program, please select an option:',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Departments']
        }]
    
    )
    console.log(mainMenu.menuHR)
    if (mainMenu.menuHR === 'View All Employees') {
        showEmployees();
    } else if (mainMenu.menuHR === 'View All Roles') {
        showRoles();
    }else if (mainMenu.menuHR === 'View All Departments') {
        showDepartments();
    }else if (mainMenu.menuHR === 'Add Employee') {
        addEmployees();
    }
}

function showEmployees(){
     db.connect(function(err){
        if(err) {
            throw err;
        } else {
        const showTableEmp = "SELECT id, first_name, last_name FROM employee"
        db.query(showTableEmp, function (err, results, fields) {
            if (err)throw err;
            console.log(results)
        });
        }    
        
    }) 
    init(); 
}

async function addEmployees(){
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
                type: 'input',
                name: 'role',
                message: 'Enter the new hires role.'
            }
        ]
        
    )
    return newEmployee
    
}
    

db.connect(function(err){
       if(err) {
           throw err;
       } else {
       const showTableEmp = "INSERT INTO employee"
       db.query(showTableEmp, function (err, results, fields) {
           if (err)throw err;
           console.log(results)
       });
       }    
       
   }) 
   init(); 


function showRoles(){
    db.connect(function(err){
        if(err) {
            throw err;
        } else {
        const showTableEmp = "SELECT title FROM employee_role"
        db.query(showTableEmp, function (err, results, fields) {
            if (err)throw err;
            console.log(results)
        });
        }     
    }) 
    init(); 
}

function showDepartments(){
    db.connect(function(err){
        if(err) {
            throw err;
        } else {
        const showTableEmp = "SELECT depName FROM department"
        db.query(showTableEmp, function (err, results, fields) {
            if (err)throw err;
            console.log(results)
        });
        }     
    }) 
    init(); 
}














init();

// const showEmployees = JSON.parse(JSON.stringify(results)); 
// const csvFields = ['id', 'first_name', 'last_name', 'role_id', 'manager_id'];
// const outputEmpTable = new json2csvParser({ csvFields });
// const csv = json2csvParser.parse(outputEmpTable)
// console.log(csv);   
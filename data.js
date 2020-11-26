const db = require("./db.js")

var inquirer = require("inquirer");
inquirer
    .prompt([
       {
           type: "input",
           name: "type",
           message: "Do you want to create a department, role or employee?"
       },
       
    ]).then(answers => {
        if (answers.type === "department") {
            inquirer.prompt([
                {
                    type: "input",
                    name:  "department",
                    message: "please enter department"
                }
            ]).then(answers =>{
                db.addDept(answers.department)
            })
        }else if (answers.type === "role"){
            inquirer.prompt([
                {
                    type: "input",
                    name:  "title",
                    message: "enter role's title"
                },
                {
                    type: "input",
                    name:  "salary",
                    message: "enter salary"
                },
                {
                    type: "input",
                    name:  "department_id",
                    message: "enter the department id"
                }
            ]).then(answers =>{
                db.addRole(answers.title, answers.salary)
            })
        }else {
            inquirer.prompt([
                {
                    type: "input",
                    name:  "firstName",
                    message: "enter employees first name"
                },
                {
                    type: "input",
                    name:  "lastName",
                    message: "enter employees last name"
                },
                {
                    type: "input",
                    name:  "role_id",
                    message: "enter employee's role id"
                },
                {
                    type: "input",
                    name:  "manager_id",
                    message: "enter manager's id"
                }
            ]).then(answers =>{
                console.log(answers)
            })
        }
        
        console.log(answers)
    })
    .catch(error => {
        if(error){
            console.error(error)
        }
    });
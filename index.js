const inquirer = require("inquirer");
let Database = require("./async-db");
let cTable = require("console.table");

const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "cms"
  });
  
async function getManagerNames() {
    let query = "SELECT * FROM employee WHERE manager_id IS NULL";

    const rows = await db.query(query);
    //console.log("number of rows returned " + rows.length);
    let employeeNames = [];
    for(const employee of rows) {
        employeeNames.push(employee.first_name + " " + employee.last_name);
    }
    return employeeNames;
}
async function getRoles() {
    let query = "SELECT title FROM role";
    const rows = await db.query(query);
    //console.log("Number of rows returned: " + rows.length);

    let roles = [];
    for(const row of rows) {
        roles.push(row.title);
    }

    return roles;
}   

async function getDepartmentNames() {
    let query = "SELECT name FROM department";
    const rows = await db.query(query);
    //console.log("Number of rows returned: " + rows.length);

    let departments = [];
    for(const row of rows) {
        departments.push(row.name);
    }

    return departments;
}

// Given the name of the department, what is its id?
async function getDepartmentId(departmentName) {
    let query = "SELECT * FROM department WHERE department.name=?";
    let args = [departmentName];
    const rows = await db.query(query, args);
    return rows[0].id;
}
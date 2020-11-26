const con = require("./server.js");

const getAllDept = ()=> {
    con.query('SELECT * FROM department', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
      });
}
const addDept =(name)=> {
    var sql = `INSERT INTO department (name) VALUES ('${name}')`
    con.query(sql, (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
      });
}
const addRole =(title, salary)=> {
    var sql = `INSERT INTO role (id, title, salary) VALUES (1,'${title}', '${salary}')`
    con.query(sql, (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
      });
}
const addEmployee =(first, last)=> {
    var sql = `INSERT INTO department (name) VALUES ('${name}')`
    con.query(sql, (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
      });
}
module.exports = {getAllDept, addDept, addRole}
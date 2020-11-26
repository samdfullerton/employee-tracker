var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employee_trackDB"
});
con.connect(function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log("connected")
    }
});
module.exports = con;
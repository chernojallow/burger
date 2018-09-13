var  mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "7082505zika",
    database: "burgers_db"

});

// make a connection
connection.connect(function(err){
    if(err){
        console.log("error connecting " + err.stack);
        return;

    }
    console.log("connected as as id " + connection.threadId);

})

module.exports = connection;
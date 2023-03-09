/*const sql = require("mssql/msnodesqlv8");
var config={
    server:"JAKIC\\SQLEXPRESS2019",
    database:"NORTHWND",
    driver:"msnodesqlv8",
    options: {
        trustedConnection:true
    }
}

sql.connect(config, function(err){
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("SELECT CompanyName FROM customers",function(err,records){
        if(err)console.log(err);
        else console.log(records);
    })
})*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql/msnodesqlv8");

    // config for your database
    var config={
        server:"JAKIC\\SQLEXPRESS2019",
        database:"NORTHWND",
        driver:"msnodesqlv8",
        options: {
            trustedConnection:true
        }
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query("SELECT CompanyName FROM customers", function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
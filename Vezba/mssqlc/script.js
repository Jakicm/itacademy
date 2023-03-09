const sql = require("mssql/msnodesqlv8");
const config = {
    server: "JAKIC\\SQLEXPRESS2019",
    database: "NORTHWND",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

sql.connect(config, function(err){
    if(err) console.log(err);
    var request = new sql.Request();
    request.query("SELECT CompanyName FROM customers", function(err, records){
        if(err) console.log(err);
        else {
            $.each(records.recordset, function(index, record){
                $("#customer-list").append("<tr><td>" + record.CompanyName + "</td></tr>");
            });
        }
    })
});

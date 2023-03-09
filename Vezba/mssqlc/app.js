const sql = require('mssql');
const express = require('express');

const app = express();
const config = {
    server:"JAKIC\SQLEXPRESS2019",
    database:"NORTHWND",
    driver:"msnodesqlv8",
    options: {
        trustedConnection:true
    }
};

app.get('/', (req, res) => {
  const pool = new sql.ConnectionPool(config);
  const poolConnect = pool.connect();

  poolConnect.then(() => {
    return pool.request().query("SELECT CompanyName FROM customers");
  }).then((result) => {
    const recordset = result.recordset;
    let html = '<table><thead><tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr></thead><tbody>';
    for (let i = 0; i < recordset.length; i++) {
      html += `<tr><td>${recordset[i].column1}</td><td>${recordset[i].column2}</td><td>${recordset[i].column3}</td></tr>`;
    }
    html += '</tbody></table>';
    res.send(html);
  }).catch((err) => {
    console.log(err);
    res.send('Error occurred');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

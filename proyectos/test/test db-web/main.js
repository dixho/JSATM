var mysql = require('mysql');

var name;

var con = mysql.createConnection({
  host: "sql697.main-hosting.eu",
  user: "u886720817_Dixho",
  password: "@aA12345678.",
  database: "u886720817_test1"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   con.query("SELECT name FROM tabladetest where ID = 1",function(err, result, fields){
        if (err) throw err;
        console.log(result);
        name = result[0].name
        console.log(name)
    });
  }); 
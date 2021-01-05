var mysql = require('mysql');
var con = mysql.createConnection({
    host: "schedina-db.clxozxu67qh1.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "MSAuriti001",
    database: "SCHEDINA"

  });
  con.connect();


var dbUtils ={};

dbUtils.executeQuery = async function (sql){
    return new Promise( function(resolve,reject) {
        con.query(sql, function (err, result) {
            if (err){
                console.log(err);
                reject(err);
            }else{
            resolve(result);
            }
          });
    });
}

module.exports = dbUtils;
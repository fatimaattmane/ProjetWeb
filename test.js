var mysql = require("mysql");
var con = mysql.createConnection({
  host: "213.32.17.44",
  user: "MFP",
  password: "projetAngular",
  database: "MiageIn"
});
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});



	con.query("SELECT * FROM Evenement", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
		//res.json(result);
	});


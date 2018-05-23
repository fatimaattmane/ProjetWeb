var evenement = require('./metier/evenement');
var utilisateur = require('./metier/utilisateur');
var bodyParser = require('body-parser');
var express = require('express');

// DataBase
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

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/appliCliente'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

//Obtention de la liste des évènements
app.get('/api/evenements', function (req, res) {
	evenement.getEvenements(con).then(function (result) {
        res.json(result);
    });
});

//Obtention d'un évènement
app.get('/api/evenements/:id', function (req, res) {
	evenement.getEvenement(con, req.params.id).then(function (result) {
		res.json(result);
	});
});

// Suppression d'un évènement
app.delete('/api/evenements/:id', function (req, res) {
	var sql = "DELETE FROM Evenement WHERE idE = " + req.params.id;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Number of records deleted: " + result.affectedRows);
	});
});

app.post('/api/evenement/', function (req, res) {
	var evenement = req.body;
	var data = [evenement.acronyme, evenement.nomE, evenement.dateE, evenement.lieu,evenement.description,evenement.dateOuvertureI,evenement.dateFermetureI,evenement.nbMaxParticipants];
	for (var i = 0; i < data.length; i++)
	var data = [req.body.acronyme, req.body.nomE, req.body.dateE, req.body.lieu,req.body.description,req.body.dateOuvertureI,req.body.dateFermetureI,req.body.nbMaxParticipants];
		//if (data[i] == undefined) {
		//	return res.status(400).send({ status: "Erreur", description: "Echec requete de création d'évenement" });
		//}

			var query = con.query("INSERT INTO  Evenement ( acronyme ,  nomE ,  dateE ,  lieu ,  description ,  dateOuvertureI ,  dateFermetureI ,  nbMaxParticipants )VALUES (?,?,?,?,?,?,?,?)",
			data, function (err, result) {
				if (err) {
				//console.log(query.sql);
				//	console.log(err);
					return res.status(500).send({ status: "Erreur", description: err.message });
				}
				else {
					return res.send({ status: "Succès", description:result.insertId});
				}
			});
});

app.post('/api/utilisateur/', function (req, res) {
	console.log(req);
	//	var user = utilisateur.creerUtilisateur(req.body.nom,req.body.prenom,req.body.mail,req.body.numTel);
	var data = [req.body.nom,req.body.prenom,req.body.mail,req.body.numTel];
	//for (var i = 0; i < data.length; i++)
		var query = con.query("INSERT INTO  Utilisateur ( nom ,  prenom ,  mail ,  numTel )VALUES (?,?,?,?)",
		data, function (err, result) {
			if (err) {
				//console.log(query.sql);
				console.log(err);
				return res.status(500).send({ status: "Erreur", description: err.message });
			}
			else {
				return res.send({ status: "Succès", description:result.insertId});
			}
		});
	
});
 /* Mise en écoute du serveur sur le port 3000
*/
app.listen(3000, function () {
    console.log('MiageIn app listening on port 3000!');
}); 

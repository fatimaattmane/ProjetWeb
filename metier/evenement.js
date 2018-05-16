<<<<<<< HEAD
var listeEvenements = {};

// Constructeur pour les Positions
function Position(id, somme) {
  // l'id du compte
  this.id = id
  // la somme
  this.somme = somme;
  // la date de dernière opération
  this.date = new Date();
}
=======
/**var express = require('express');
var router = express.Router();

router.post('/evenement/', function (req, res) {
	var evenement = req.body;
	var data = [evenement.acronyme, evenement.nomE, evenement.dateE, evenement.lieu,evenement.description,evenement.dateOuvertureI,evenement.dateFermetureI,evenement.nbMaxParticipants];
	for (var i = 0; i < data.length; i++)
		if (data[i] == undefined) {
			return res.status(400).send({ status: "Erreur", description: "Echec requete de création d'évenement" });
		}
	req.getConnection(function (err, conn) {
		if (err)
			return res.status(500).send({ status: "Erreur", description: "Problème de connexion à la BDD" });
		else {
			var query = conn.query("INSERT INTO `Evenement`(`acronyme`, `nomE`, `dateE`, `lieu`, `description`, `dateOuvertureI`, `dateFermetureI`, `nbMaxParticipants`)VALUES ('testFatima','testFatima','2018-01-01','testFatima','testFatima','2018-01-01','2018-01-01',50)",
				data, function (err, result) {
					if (err) {
						console.log(query.sql);
						console.log(err);
						return res.status(500).send({ status: "Erreur", description: err.message });
					}
					else {
						return res.send({ status: "Succès", description:result.insertId}); 
					}
				});
		}
	});
});**/
>>>>>>> 9223a41440bf2f8f5406103cef82d3588345b501

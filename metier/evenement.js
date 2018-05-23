
var listeEvenements = {};

// Constructeur pour les Evenements
function Evenement(idE, acronyme, nomE, dateE, lieu, description, dateOuvertureI, dateFermetureI, nbMaxParticipants) {
  this.idE = idE;
  this.acronyme = acronyme;
  this.nomE = nomE;
  this.dateE = dateE;
  this.lieu = lieu;
  this.description = description;
  this.dateOuvertureI = dateOuvertureI;
  this.dateFermetureI = dateFermetureI;
  this.nbMaxParticipants = nbMaxParticipants;
}

// Constructeur pour les Positions
var getEvenements = async function(con) {
	return new Promise(function (resolve, reject) {
        con.query("SELECT * FROM Evenement", function (err, result, fields) {
            if (err) {
                reject(err);
            } else {
                // Return les données en format Json
                resolve(result);
            }
        });

    });
}

var getEvenement = function(con, id) {
	return new Promise(function (resolve, reject) {
		con.query("SELECT * FROM Evenement WHERE idE = " + id, function (err, result, fields) {
			if (err) {
				reject(err);
			} else {
				// Return les données en format Json
				resolve(result);
			}
		});
	});
}

// Fonctions exportées
exports.getEvenements = getEvenements;
exports.getEvenement = getEvenement;
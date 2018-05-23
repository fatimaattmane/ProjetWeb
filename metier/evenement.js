
var listeEvenements = {};
function Evenements(acronyme,nomE,lieu,description,dateOuvertureI,dateFermetureI,nbMaxParticipants) {
  this.acronyme = acronyme;
  this.nomE = nomE;
  this.lieu=lieu;
  this.description=description;
  this.dateOuvertureI=dateOuvertureI;
  this.dateFermetureI=dateFermetureI;
  this.nbMaxParticipants=nbMaxParticipants;
}

var creerEvenement = function(acronyme,nomE,lieu,description,dateOuvertureI,dateFermetureI,nbMaxParticipants) {
	listeEvenements.push(new Evenements(acronyme,nomE,lieu,description,dateOuvertureI,dateFermetureI,nbMaxParticipants));
	return 1;
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


function creerBDDEvent(acronyme,nomE,lieu,description,dateOuvertureI,dateFermetureI,nbMaxParticipants, callback){
	connection.query('INSERT INTO Evenement SET ?', {'acronyme' : acronyme, 'nomE' : nomE, 'dateE' : dateE, 'lieu' : lieu , 'description' : description ,  'dateOuvertureI' : dateOuvertureI ,  'dateFermetureI' : dateFermetureI ,  'nbMaxParticipants' : nbMaxParticipants}, function(err, result) {
		callback(err,result);
	});
}

// Fonctions exportées
exports.getEvenements = getEvenements;
exports.getEvenement = getEvenement;
exports.creerEvenement = creerEvenement;



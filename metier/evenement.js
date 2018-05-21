
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

  function creerBDDEvent(acronyme,nomE,lieu,description,dateOuvertureI,dateFermetureI,nbMaxParticipants, callback){
    connection.query('INSERT INTO Evenement SET ?', {'acronyme' : acronyme, 'nomE' : nomE, 'dateE' : dateE, 'lieu' : lieu , 'description' : description ,  'dateOuvertureI' : dateOuvertureI ,  'dateFermetureI' : dateFermetureI ,  'nbMaxParticipants' : nbMaxParticipants}, function(err, result) {
     callback(err,result);
    });
}


exports.creerEvenement = creerEvenement;
exports.creerEvenement

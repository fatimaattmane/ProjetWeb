var listeUtilisateurs = [];

function Utilisateur(nom,prenom,mail,numTel) {
  this.nom = nom;
  this.prenom = prenom;
  this.mail=mail;
  this.numTel=numTel;
}

var creerUtilisateur = function(nom,prenom,mail,numTel) {
	listeUtilisateurs.push(new Utilisateur(nom,prenom,mail,numTel));
	return 1;
}

function creerBDDUtilisateur(nom,prenom,mail,numTel){
  console.log("je suis dans la fonction creerBDDUtilisateur utilisateur.js")
  connection.query('INSERT INTO Utilisateur SET ?', {'nom' : nom, 'prenom' : prenom, 'mail' : mail, 'numTel' : numTel});
}


exports.creerUtilisateur = creerUtilisateur;
exports.creerBDDUtilisateur = creerBDDUtilisateur;

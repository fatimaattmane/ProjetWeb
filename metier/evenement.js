
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

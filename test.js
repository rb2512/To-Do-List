// Convertis ces 3 fonctions en arrow functions concises (sans accolades)
const multiplier = (a,b) => a * b;
const estPair = (n) => n % 2 === 0;
const direBonjour = () => "Hello !";

const mots = ["javascript", "html", "css", "python"];
// Crée un nouveau tableau avec chaque mot en majuscules
// Indice : utilise .toUpperCase()
const motsMajuscule = mots.map(n => n.toUpperCase);

const notes = [12, 7, 18, 9, 14, 6, 11];
// Récupère uniquement les notes supérieures ou égales à 10
const notesRéussite = notes.filter(n => n > 10);

const produits = [
  { nom: "stylo", prix: 1.5 },
  { nom: "cahier", prix: 3.2 },
  { nom: "sac", prix: 25 },
  { nom: "règle", prix: 2.1 },
];
// Étape 1 : filtre uniquement les produits dont le prix est inférieur à 5€
// Étape 2 : sur ce résultat, crée un tableau avec seulement les noms
// Résultat attendu : ["stylo", "cahier", "règle"]
const basPrix = produits.prix.filter(n => n < 5);
const produitsBasPrix = basPrix.map(basPrix => basPrix.nom);
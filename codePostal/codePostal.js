const api = "https://geo.api.gouv.fr/communes?";
let typeSearch = null;
let apiFull = null;
let valeurRecherche = null;

/* Recherche par Code Postal*/
function askPostalCode() {
  typeSearch = "codePostal=";
  valeurRecherche = codePostal.value;
  apiFull = api + typeSearch + valeurRecherche;

  fetch(apiFull)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then((value) => {
      /* Je vide la liste déroulante */
      document.getElementById("ville").options.length = 0;
      /* Si le tableau retourné n'est pas vide, on créé une liste déroulante
        avec les résultats de la recherche*/
      if (value.length > 0) {
        var listeVilles = document.getElementById("ville");
        /* Pour chaque élément du tableau, on créé une option, qui prend
        comme valeur le nom de la ville
        Puis on l'ajoute au Select */
        for (let i = 0; i < value.length; i++) {
          var newElement = document.createElement("option");
          newElement.innerHTML = value[i].nom;
          listeVilles.appendChild(newElement);
        }
      }
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

document
  .getElementById("searchButtonCP")
  .addEventListener("click", askPostalCode);

/* Recherche par nom de ville */
function showCityName() {
  typeSearch = "nom=";
  valeurRecherche = nomVille.value;
  var searchOptions = "&boost=population&limit=5'";
  apiFull = api + typeSearch + valeurRecherche + searchOptions;

  fetch(apiFull)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then((value) => {
      if (value.length > 0) {
        var listeVilles = document.getElementById("browsers");
        for (let i = 0; i < value.length; i++) {
          var newElement = document.createElement("option");
          newElement.innerHTML = value[i].nom;
          listeVilles.appendChild(newElement);
        }
      }
    })
    .catch(function (err) {
      console.log(err.message);
    });
}
document.getElementById("nomVille").addEventListener("input", showCityName);

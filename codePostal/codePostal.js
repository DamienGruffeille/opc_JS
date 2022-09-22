const api = "https://geo.api.gouv.fr/communes?";
let typeSearch = null;
let apiFull = null;
let valeurRecherche = null;

document
  .getElementById("searchButtonCP")
  .addEventListener("click", askPostalCode);
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
        let listeVilles = document.getElementById("ville");
        /* Pour chaque élément du tableau, on créé une option, qui prend
        comme valeur le nom de la ville
        Puis on l'ajoute au Select */
        for (const element of value) {
          let newElement = document.createElement("option");
          newElement.innerHTML = element.nom;
          listeVilles.appendChild(newElement);
        }
      }
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

document.getElementById("nomVille").addEventListener("input", showCityName);
/* Recherche par nom de ville */
function showCityName() {
  typeSearch = "nom=";
  valeurRecherche = nomVille.value;
  let searchOptions = "&boost=population&limit=5'";
  apiFull = api + typeSearch + valeurRecherche + searchOptions;

  fetch(apiFull)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then((value) => {
      document.getElementById("erreur").innerHTML = "";
      if (value.length > 0) {
        /* Création de la liste qui contiendra les résultats */
        select.style.display = "block";
        let ul = document.createElement("ul");
        select.innerHTML = "";
        select.appendChild(ul);
        for (const element of value) {
          for (const code of element.codesPostaux) {
            let li = document.createElement("li");
            let ligneAdresse = document.createElement("span");
            ligneAdresse.innerHTML = element.nom + " - " + code;
            li.onclick = function () {
              selectAdresse(element, code);
            };
            li.appendChild(ligneAdresse);
            ul.appendChild(li);
          }
        }
      } else {
        select.style.display = "none";
        if (nomVille.value == "") {
          erreur.style.display = "none";
        } else {
          document.getElementById("erreur").innerHTML = "Aucune correspondance";
        }
      }
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

function selectAdresse(element, code) {
  document.getElementById("nomVille").value = element.nom;
  document.getElementById("townResult").value = element.nom;
  document.getElementById("postalCodeResult").value = code;
  select.style.display = "none";
}

document.getElementById("nomVille").addEventListener("change", clearFields);

function clearFields() {
  if (nomVille.value == "") {
    // console.log("I want to clear those F fields");
    document.getElementById("townResult").value = "";
    document.getElementById("postalCodeResult").value = "";
  }
}

//variable de différentes personnes
let personne1 = "jean";
let personne2 = "Paul";
let personne3 = "Marcel";

const changeFirstLetterToUpperCase = (personne) => {
  return personne[0].toUpperCase() + personne.substr(1);
};

const countLetters = (personne) => {
  return personne.length;
};

function sayHello(personne) {
  console.log(
    `Bonjour ${changeFirstLetterToUpperCase(
      personne
    )}, ton prénom contient ${countLetters(personne)} lettres`
  );
}

sayHello(personne1);
sayHello(personne2);
sayHello(personne3);

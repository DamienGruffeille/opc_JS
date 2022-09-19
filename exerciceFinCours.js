class Book {
  constructor(title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = false;
  }
  readBook(page) {
    if (page < 1 || page > this.pages) {
      return 0;
    } else if (page >= 1 && page < this.pages) {
      this.currentPage = page;
      console.log("Point 1 : " + this.currentPage);
      return 1;
    } else {
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}

let book1 = new Book("J'apprends JS", "author1", "Le premier livre", 100, 0);
let book2 = new Book("Avec OPC", "Author2", "Deuxième Livre", 200, 10);
let book3 = new Book(
  "C'est intéressant",
  "Author3",
  "Le troisième livre",
  300,
  0
);

console.log(
  "Avant fonction :" +
    book3.title +
    " / " +
    book3.read +
    " currentPage = " +
    book3.currentPage
);
book3.readBook(300);
console.log(
  "Après fonction :" +
    book3.title +
    " / " +
    book3.read +
    " currentPage = " +
    book3.currentPage
);
const books = [book1, book2, book3];
let i = 0;
for (let book of books) {
  i++;
  console.log("Livre n°" + i + " : " + book.title);
}

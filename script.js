/* const currentDate = new Date("1999/01/02") // a blueprintek tartalommal nem feltöltött valamik, amik vázat képeznek. úgy lesz objektum, hogy feltöltjük adattal. date úgy viselkedik, mint egy függvény, de ha megnézzük a típusát: object. --> object constraction Date() constructor -- előny, hhogy ugyannar a sémára épülő objektumot hozhatunk létre. nagybetűvel kezdődnek ők.

console.log(currentDate); */

function Book(title, author, year, genre) { // this: szinte minden esetben obj ra mutat vissza
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function () {
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear - this.year   //metódus írható az obj constructorba, ez nagy előnye, kivonjuk az aktuális dátumból az évet. példány szintű függvény, akkor fut le ha meghívjuk
    }
} 

const myFavoriteBook = new Book("Háború és béke", "Tolsztoj", 1867, "Historical novel")
// argumentumokként megadjuk neki az objektum elemeit

const mySecondFavoriteBook = new Book("Algebra alapjai", "Joe Algebra", 1992, "sci-fi")
// obj construction: csak akkor jöjjenek létre ha szükségünk van rá. 

console.log(myFavoriteBook.age());


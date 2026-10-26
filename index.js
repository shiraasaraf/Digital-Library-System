class MediaItem {
    constructor(title, year, genre) {
        this.title = title
        this.year = year
        this.genre = genre
    }

    getSummary() {
        console.log(`${this.title} (${this.year}) - Genre: ${this.genre}`)
    }
}

class Book extends MediaItem {
    constructor(title, year, genre, author, pageCount) {
        super(title, year, genre)
        this.author = author
        this.pageCount = pageCount
    }

    getSummary() {
        console.log(`Book: ${this.title} by ${this.author}, ${this.pageCount} pages`)
    }
}


class Movie extends MediaItem {

    constructor(title, year, genre, director, durationMinutes) {
        super(title, year, genre)
        this.director = director
        this.durationMinutes = durationMinutes
    }

    getSummary() {

        console.log(`Movie: '${this.title}' directed by ${this.director}, ${this.durationMinutes} min`)
    }
}


class Library {
    
    items = [];

    addItem(item){

        this.items.push(item);
    }

    search(term) {
        const results = [];

        for (const item of this.items){
            if(item.title.toLowerCase().includes(term.toLowerCase()))
            results.push(item)
        }

        return results;
        

    }

    listByGenre(genre) {

        const results = [];

        for (const item of this.items){
            if(item.genre.toLowerCase().includes(genre.toLowerCase()))
            results.push(item)
        }

        return results;

    }

}



const lib = new Library();

const book1 = new Book("Dune", 1965, "Sci-Fi", "Frank Herbert", 412);
const book2 = new Book("Harry Potter and the Philosopher's Stone", 1997, "Fantasy", "J.K. Rowling", 223);
const book3 = new Book("The Hobbit", 1937, "Fantasy", "J.R.R. Tolkien", 310);

const movie1 = new Movie("Dune", 2021, "Sci-Fi", "Denis Villeneuve", 155);
const movie2 = new Movie("Inception", 2010, "Sci-Fi", "Christopher Nolan", 148);
const movie3 = new Movie("Titanic", 1997, "Romance", "James Cameron", 194);

lib.addItem(book1);
lib.addItem(book2);
lib.addItem(book3);

lib.addItem(movie1);
lib.addItem(movie2);
lib.addItem(movie3);

let results = lib.search("Dune");

for (const item of results) {
    item.getSummary();
}

results = lib.listByGenre("Sci-Fi");

for (const item of results) {
    item.getSummary();
}
// Constructor (this makes the object)
function Book(title, author, year) {
   this.title = title;
   this.author = author;
   this.year = year;

   this.getSummary = function() {
       return `${this.title} was written by ${this.author} in ${this.year}`;
   }
};

// Instatiat an Object (this adds the propertise for the Objects)
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book2.getSummary())
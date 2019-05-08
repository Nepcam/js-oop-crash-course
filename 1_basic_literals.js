// const s1 = 'Hello'; 
// console.log(s1.toUpperCase());
// console.log(typeof s1);


// const s2 = new String('Hello');
// console.log(typeof s2);

// // this starts as a string but as soon as you add a method e.g (toUpperCase()) JavaScript turns it to an object.

// console.log(window); // parent object of everything.
// alert(1);

//console.log(navigator.appVersion);

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2015',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));
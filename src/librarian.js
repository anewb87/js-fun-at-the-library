
class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patron, isMorning) {
     if (isMorning === true) {
       return "Good morning, " + patron + "!";
     } else {
       return "Hello, " + patron + "!";
     }
   }
   findBook(bookTitle) {
     if ( === bookTitle) {
       //having trouble following the test: var book = ... DOES exist. But where is it? Need to 'find' it so I can access and see if it's the same as bookTitle
     } else {
       return "Sorry, we do not have " + bookTitle;
     }
   }
}

module.exports = Librarian;

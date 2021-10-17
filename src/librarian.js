class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    //this.greetPatron = "Hello"
  }
   greetPatron(patron) {
     return "Hello, " + patron + "!";
   }
}


module.exports = Librarian;

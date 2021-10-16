function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}

function checkoutBook (library, book) {
  library.shelves[book.genre].pop(book)
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

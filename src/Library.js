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

function checkoutBook (library, book, shelf) {
  var checkOut = `You have now checked out ${book.title} from the ${library}`
  var cannotCheckOut = `Sorry, there are currently no copies of ${book.title} available at the ${library}`
  for (var i = 0; i < library.shelves[shelf].length; i ++) {
    if (book === library.shelves[shelf][i].title) {
      library.shelves[shelf].splice(i, 1);
      return checkOut
  } else {
    return cannotCheckOut
  }
}
}




module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

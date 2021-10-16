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

// function checkoutBook (library, bookTitle, specificShelf) {
//   var checkOut = `You have now checked out ${bookTitle} from the ${library.name}`
//   var cannotCheckOut = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
//   for (var i = 0; i < library.shelves[specificShelf].length; i ++) {
//     if (bookTitle === library.shelves[specificShelf][i].title) {
//       library.shelves[specificShelf].splice(i, 1);
//       return checkOut;
//     } else {
//       return cannotCheckOut;
//     }
//   }
// }


function checkoutBook (library, bookTitle, specificShelf) {
  var checkOut = `You have now checked out ${bookTitle} from the ${library.name}`
//  var cannotCheckOut = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  for (var i = 0; i < library.shelves[specificShelf].length; i ++) {
    if (bookTitle === library.shelves[specificShelf][i].title) {
      library.shelves[specificShelf].splice(i, 1);
      return checkOut
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}
//this bottom one works, but I can't understand why the top one doesn't work.
//I don't particuarly understand this one- throwing code at the wall- where I do understand the attempt above.



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

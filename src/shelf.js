function shelfBook(book, shelfArray) {
  if (shelfArray.length < 3) {
      shelfArray.unshift(book);
  }
};

function unshelfBook(title, shelfArray) {
  for (var i = 0; i < shelfArray.length; i++ ) {
    if (shelfArray[i].title === title) {
      shelfArray.splice(i,1)
    }
  }
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};

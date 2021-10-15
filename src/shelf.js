function shelfBook(book, shelfArray) {
  if (shelfArray.length < 3) {
      shelfArray.unshift(book);
  }
};

function unshelfBook(title, shelfArray) {
  for (var i = 0; i < shelfArray.length; i++ ) {
    if (shelfArray[i].title === title) {
      shelfArray.splice(i, 1)
    }
  }
}

function listTitles(shelfArray) {
  var titleList = ''
  for (var i = 0; i < shelfArray.length; i++ ) {
    if (i < shelfArray.length - 1){
      titleList += shelfArray[i].title + ", "
    } else {
    titleList += shelfArray[i].title
    }
  }
  return titleList
}

function searchShelf(shelfArray, title) {
  for (var i = 0; i < shelfArray.length; i++ ) {
    if (shelfArray[i].title === title) {
      return true
    } else {
      return false
    }
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

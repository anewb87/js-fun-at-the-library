function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return mainCharacter
};

   function saveReview(criticReview, reviews) {
     if (reviews.includes(criticReview)) {
       return reviews;
     } else {
       reviews.push(criticReview);
     }
     return reviews;
   };


function calculatePageCount(title) {
  return title.length * 20
};

function writeBook(title, buildMainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: buildMainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return book
};

 function editBook(book) {
   book.pageCount = book.pageCount * .75
 };


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

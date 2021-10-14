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

function saveReview(criticReview) {
  var reviews = [];
  reviews.push(criticReview)
};

function calculatePageCount(title) {
  return title.length * 20
};

function writeBook(createTitle, buildMainCharacter, calculatePageCount, genre) {
  var book = {
    title: createTitle,
    mainCharacter: buildMainCharacter,
    pageCount: calculatePageCount,
    genre: genre,
  }
  return book
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}

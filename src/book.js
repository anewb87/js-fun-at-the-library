function createTitle(title) {
  return `The ${title}`
};

class buildMainCharacter {
  constructor (name, age, pronouns) {
    this.name = name;
    this.age = age;
    this.pronouns = pronouns;
  }
};

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}

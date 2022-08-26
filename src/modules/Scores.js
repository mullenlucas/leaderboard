import Score from './eachScore.js';

// Class that contains collection of Scores
class Scores {
  constructor() {
    this.Scores = [];
  }

  // create a new Score and save it in the collection using the Score class declared above
  newScore(name, val, ind) {
    const t = new Score(name, val, ind);
    this.Scores.push(t);
    return t;
  }

  get allScores() {
    return this.Scores;
  }

  cleanScores() {
    this.Scores = []
  }

  changeVal(ind, val) {
    this.allScores[ind].val = val;
  }
}

export default Scores;
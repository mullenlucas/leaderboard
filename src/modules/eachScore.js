// Individual Score class, regarding properties and methods for one score
class Score {
  constructor(name, val, index) {
    this.name = name;
    this.val = val;
    this.index = index;
  }

  get scoreDesc() {
    return this.desc;
  }

  get scoreVal() {
    return this.val;
  }
}

export default Score;
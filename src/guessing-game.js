class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.number;
      }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.number = Math.round((this.max + this.min) / 2);
        return this.number;
    }

    lower() {
        this.max = this.number;
    }

    greater() {
        this.min = this.number;
    }
}

module.exports = GuessingGame;

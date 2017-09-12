class GuessingGame {

    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.result = Math.round((max+min)/2);
    }

    guess() {
        console.log(this.result);
        return this.result;
    }

    lower() {
        this.max = this.result;
         this.result = Math.round((this.max+this.min)/2);
    }

    greater() {
        this.min = this.result;
        this.result = Math.round((this.max+this.min)/2);
    }
}

module.exports = GuessingGame;

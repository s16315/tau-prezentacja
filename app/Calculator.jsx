/**
 * Class Calculator
 */
function Calculator() {
    this.history = [];
    /**
     * Method for summing parameters a and b. Returns the result.
     * @param a
     * @param b
     * @returns {number}
     */
    this.sum = function (a, b) {
        this.history.concat([a, "+", b]);
        return Number(a)+Number(b);
    }
    /**
     * Method of multiplying parameters a and b. Returns the result.
     * @param a
     * @param b
     * @returns {number}
     */
    this.multiply = function (a, b) {
        this.history.concat([a, "*", b]);
        return Number(a)*Number(b);
    }
    /**
     * A method that returns a history of activities.
     * @returns {*[]}
     */
    this.getHistory = function () {
        return [].concat(this.history);
    }
}
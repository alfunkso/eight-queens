export default class PosModel {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }

    isLastColumn() {
        return this.j === 7;
    }

    isWithinBoard() {
        return this.i >= 0 && this.i <= 7 && this.j >= 0 && this.j <= 7;
    }

    add(pos) {
        return new PosModel(this.i + pos.i, this.j + pos.j);
    }

    equals(pos) {
        return this.i === pos.i && this.j === pos.j;
    }

}
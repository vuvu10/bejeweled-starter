const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    // Move cursor up
    this.row = Math.max(0, this.row - 1);
    this.setBackgroundColor();
  }

  down() {
    // Move cursor down
    this.row = Math.min(0, this.row - 1);
    this.setBackgroundColor();
  }

  left() {
    // Move cursor left
    this.col = Math.max(0, this.col - 1);
    this.setBackgroundColor();
  }

  right() {
    // Move cursor right
    this.col = Math.min(this.numCols - 1, this.col + 1);
    this.setBackgroundColor();
  }

}


module.exports = Cursor;

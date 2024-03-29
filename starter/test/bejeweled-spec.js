const { expect } = require('chai');

const Bejeweled = require("../class/bejeweled.js");
const { it } = require('mocha');

describe ('Bejeweled', function () {

  // Add tests for setting up a basic board
  it('should create a new game with an 8 * 8 grid', () => {
    const game = new Bejeweled();
    expect(game.grid.length).to.equal(8);
    expect(game.grid[0].length).to.equal(8);
  });

  // Add tests for a valid swap that matches 3
  it('should detect a valid horizontal match of 3 gems', () =>{
    const game = new Bejeweled();
    game.grid = [
      ['R', 'G', 'G', 'B', 'Y', 'R', 'B', 'Y'],
      ['Y', 'R', 'G', 'B', 'Y', 'R', 'B', 'Y'],
      ['B', 'Y', 'R', 'G', 'B', 'Y', 'R', 'B'],
    ];
    const initialScore = game.score;
    game.swapGems(0, 1, 0, 2);
    expect(game.grid[0][0]).to.not.equal('G');
    expect(game.score).to.be.greaterThan(initialScore);
  });

  // Add tests for swaps that set up combos
  it('should detect a horizontal match followed by a vertical match after a swap (combo)', () => {
    const game = new Bejeweled();
    game.grid = [
      ['R', 'G', 'G', 'B', 'Y', 'R', 'B', 'Y'],
      ['Y', 'R', 'B', 'Y', 'G', 'R', 'B', 'Y'],
      ['B', 'Y', 'R', 'G', 'B', 'Y', 'R', 'B'],
    ];
    const initialScore = game.score;
    game.swapGems(0, 1, 0, 2);
    expect(game.grid[0][0]).to.not.equal('G');
    expect(game.grid[1][1]).to.not.equal('B');
    expect(game.score).to.be.greaterThan(initialScore * 2);
  });

  // Add tests to check if there are no possible valid moves
  it('should indicate no valid moves are available on a full board', () => {
    const game = new Bejeweled();
    game.grid = [
      ['R', 'G', 'B', 'Y', 'R', 'B', 'Y', 'R'],
      ['Y', 'R', 'G', 'B', 'Y', 'R', 'B', 'Y'],
      ['B', 'Y', 'R', 'G', 'B', 'Y', 'R', 'B'],

    ];
  });

});

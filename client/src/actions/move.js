const evalRow = require('./rowMove.js');

let sampleBoard = [
  [0, 2, 2, 4],
  [1, 0, 1, 4],
  [1, 2, 0, 1],
  [1, 1, 0, 0],
];

function evalBoard(board) {
  const newBoard = [];

  for (let row in board) {
    newBoard.push(evalRow(row));
  }

  return newBoard;
}

console.log(evalBoard(sampleBoard));

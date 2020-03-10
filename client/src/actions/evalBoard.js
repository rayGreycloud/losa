// 1024

// function to evaluate one row
// sample row
// let sampleRow = [0, 2, 2, 4];
// let sampleRow2 = [1, 0, 1, 4];
// let sampleRow3 = [1, 2, 0, 1];
// let sampleRow4 = [1, 1, 0, 0];
// let sampleRow5 = [0, 1, 2, 4];

function evalRow(row) {
  // first spot
  if (row[0] !== 0 && row[0] === row[1]) {
    // first = second
    // double second value
    row[1] = row[0] * 2;
    // set first "empty"
    row[0] = 0;
  } else if (row[0] !== 0 && row[1] === 0) {
    row[1] = row[0];
    row[0] = 0;
  }

  // second spot
  if (row[1] !== 0 && row[1] === row[2]) {
    // second = third
    // double third value
    row[2] = row[1] * 2;
    // check prior value
    if (row[0] !== 0) {
      // "slide tile" by assigning value
      row[1] = row[0];
      row[0] = 0;
    } else {
      row[1] = 0;
    }
  } else if (row[1] !== 0 && row[2] === 0) {
    // slide tile
    row[2] = row[1];
    // slide tile if not 0
    row[1] = row[0] > 0 ? row[0] : 0;
    row[0] = 0;
  }

  // third spot
  if (row[2] !== 0 && row[2] === row[3]) {
    // third = fourth
    // double fourth value
    row[3] = row[2] * 2;
    // check priors
    if (row[1] !== 0) {
      row[2] = row[1];
      row[1] = row[0] > 0 ? row[0] : 0;
      row[0] = 0;
    } else {
      row[2] = 0;
    }
  } else if (row[2] !== 0 && row[3] === 0) {
    row[3] = row[2];
    row[2] = row[1] > 0 ? row[1] : 0;
    row[1] = row[0] > 0 ? row[0] : 0;
    row[0] = 0;
  }

  return row;
}

let sampleBoard = [[0, 2, 2, 4], [1, 0, 1, 4], [1, 2, 0, 1], [1, 1, 0, 0]];
let sampleBoard2 = [[0, 2, 2, 4], [1, 0, 1, 4], [1, 2, 0, 1], [1, 1, 0, 0]];
let newBoard = [];

function evalBoard(board, newBoard) {
  console.log('boardBefore: ', board);

  for (let i = 0; i < 4; i++) {
    evalRow(board[i]);
    // newBoard.push(evalRow(board[i]));
  }
  // board.map(row => {
  //   console.log(board);
  //   const newRow = evalRow(row);
  //   newBoard.push(newRow);
  // });

  console.log('boardAfter: ', board);

  return board;
}
console.log('new: ', evalBoard(sampleBoard2, newBoard));

// console.log(sampleRow);
// console.log('result: ', evalRow(sampleRow));
// console.log(sampleRow2);
// console.log('result: ', evalRow(sampleRow2));
// console.log(sampleRow3);
// console.log('result: ', evalRow(sampleRow3));
// console.log(sampleRow4);
// console.log('result: ', evalRow(sampleRow4));
// console.log(sampleRow5);
// console.log('result: ', evalRow(sampleRow5));

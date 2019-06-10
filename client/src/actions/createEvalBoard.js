export const createEvalBoard = (currentBoard, direction) => dispatch => {
  const evalBoard = [[], [], [], []];

  // iterate thru currentBoard rows
  currentBoard.map(currentBdRow => {
    // iterate thru each row
    currentBdRow.map(item => {
      // grab this item's location for specified direction
      let row = item[direction][0];
      let col = item[direction][1];
      // set that location on evalBoard to item value
      evalBoard[row][col] = item.value;
    });
  });

  dispatch(evaluateBoard(evalBoard));
};

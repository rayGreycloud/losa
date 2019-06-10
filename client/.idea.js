// generating eval boards

// example using nested arrays
state = {
  board: [
    [
      {
        value: 0,
        // eval board locations by array 'coordinates'
        // alternative:
        // right: [0, 0],
        right: { row: 0, col: 0 },
        down: { row: 0, col: 0 },
        left: { row: 0, col: 3 },
        up: { row: 0, col: 3 }
      },
      {
        value: 1,
        right: { row: 0, col: 1 },
        down: { row: 1, col: 0 },
        left: { row: 0, col: 2 },
        up: { row: 1, col: 3 }
      },
      {
        value: 2,
        right: { row: 0, col: 2 },
        down: { row: 2, col: 0 },
        left: { row: 0, col: 1 },
        up: { row: 2, col: 3 }
      },
      {
        value: 4,
        right: { row: 0, col: 3 },
        down: { row: 3, col: 0 },
        left: { row: 0, col: 0 },
        up: { row: 3, col: 3 }
      }
    ],
    // etc for other 3 rows]
    [{}, {}, {}, {}],
    [{}, {}, {}, {}],
    [{}, {}, {}, {}]
  ]
};

// alternative?
// No, evalBoard requires arrays
let state = {
  board2: {
    1: {
      value: 0,
      right: 1,
      down: 1,
      left: 4,
      up: 4
    },
    2: {
      value: 0,
      right: 2,
      down: 5,
      left: 3,
      up: 8
    },
    3: {
      value: 0,
      right: 3,
      down: 9,
      left: 2,
      up: 12
    },
    4: {
      value: 0,
      right: 4,
      down: 13,
      left: 1,
      up: 16
    },
    // row 2
    5: {
      value: 0,
      right: 5,
      down: 2,
      left: 8,
      up: 3
    }
  }
};

const initialState = {
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

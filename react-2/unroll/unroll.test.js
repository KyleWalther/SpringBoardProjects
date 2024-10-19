const unroll = require("./unroll");

describe("#unroll", function () {



  test('4x4 square array', () => {
    const squareArray = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    expect(unroll(squareArray)).toEqual([
      1, 2, 3, 4,
      8, 12, 16, 15,
      14, 13, 9, 5,
      6, 7, 11, 10
    ]);
  });

  test('3x3 square array', () => {
    const squareArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(unroll(squareArray)).toEqual([
      1, 2, 3,
      6, 9, 8,
      7, 4, 5
    ]);
  });

  test('2x2 square array', () => {
    const squareArray = [
      [1, 2],
      [3, 4]
    ];
    expect(unroll(squareArray)).toEqual([1, 2, 4, 3]);
  });

  test('Single element array', () => {
    const squareArray = [[1]];
    expect(unroll(squareArray)).toEqual([1]);
  });

  test('Empty array', () => {
    const squareArray = [];
    expect(unroll(squareArray)).toEqual([]);
  });


  test('3x4 square array', () => {
    const squareArray = [
      [1, 2, 3, 4],
      [4, 5, 6, 5],
      [7, 8, 9, 6]
    ];
    expect(unroll(squareArray)).toEqual([
      1, 2, 3, 4,
      5, 6, 9, 8,
      7, 4, 5, 6
    ]);
  });


  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});

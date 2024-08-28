const { sqlForPartialUpdate } = require("./path-to-your-function");
const { BadRequestError } = require("../expressError");

describe("sqlForPartialUpdate", function() {

  test("successfully generates SQL for partial update", function() {
    const dataToUpdate = { firstName: 'Aliya', age: 32 };
    const jsToSql = { firstName: 'first_name' };

    const result = sqlForPartialUpdate(dataToUpdate, jsToSql);

    expect(result).toEqual({
      setCols: '"first_name"=$1, "age"=$2',
      values: ['Aliya', 32],
    });
  });

  test("successfully handles when no jsToSql mappings are provided", function() {
    const dataToUpdate = { firstName: 'Aliya', age: 32 };

    const result = sqlForPartialUpdate(dataToUpdate);

    expect(result).toEqual({
      setCols: '"firstName"=$1, "age"=$2',
      values: ['Aliya', 32],
    });
  });

  test("throws BadRequestError when no data is provided", function() {
    expect(() => {
      sqlForPartialUpdate({}, {});
    }).toThrow(BadRequestError);
  });

});

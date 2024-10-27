import mut from "./module.js"; // MUT = Module Under Test

test("Testing sum -- success", () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test("Testing div -- success", () => {
    const expected = 2;
    const got = mut.div(4, 2);
    expect(got).toBe(expected);
});

test("Testing div -- divide by zero", () => {
  const expected = Infinity;
  const got = mut.div(4, 0);
  expect(got).toBe(expected);
});

test("Testing div -- divide by negative", () => {
  const expected = -2;
  const got = mut.div(-4, 2);
  expect(got).toBe(expected);
});

test("Testing containsNumbers -- contain num", () => {
    expect(mut.containsNumbers("Hello12World34")).toBe((true))
});

test("Testing containsNumbers -- do not contain num", () => {
  expect(mut.containsNumbers("HelloWorld")).toBe(false);
});

test("Testing containsNumbers -- emptry str", () => {
  expect(mut.containsNumbers("")).toBe(false);
});

test("Testing containsNumbers -- only number", () => {
  expect(mut.containsNumbers("123456")).toBe(true);
});

// this suppose to return False - since spaces turned into a number
test("Testing containsNumbers -- space", () => {
  expect(mut.containsNumbers(" ")).toBe(true);
});
import { Stack } from "./index";

it("should push an item to the stack", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  expect(stack.frames).toStrictEqual([1, 2]);
});

it("should pop an item from the stack", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  expect(stack.pop()).toBe(2);
});

it("should peek at the top item from the stack", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  expect(stack.peek()).toBe(2);
});

it("should return the size of the stack", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  expect(stack.size()).toBe(2);
});

it("should return whether the stack is empty", () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
  stack.push(1);
  expect(stack.isEmpty()).toBe(false);
});

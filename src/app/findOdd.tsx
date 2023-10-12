import React from "react";
import { describe, test, expect } from "@jest/globals";
const findOdd = () => {
  function findOdd(arr: any) {
    let result = 0;
    for (let num of arr) {
      result ^= num;
    }
    return result;
  }

  // Unit test using Jest
  const testCases = [
    { input: [1, 2, 2, 1, 3, 3, 4], output: 4 },
    { input: [7, 7, 7], output: 7 },
    { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6], output: 7 },
  ];
  describe("My test case CountSmileys", () => {
    testCases.forEach((testCase, index) => {
      test(`Test case ${index + 1}`, () => {
        expect(findOdd(testCase.input)).toBe(testCase.output);
      });
    });
  });

  return <div>findOdd</div>;
};

export default findOdd;

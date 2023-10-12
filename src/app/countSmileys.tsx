import React from "react";
import { describe, test, expect } from '@jest/globals';
const CountSmileys = () => {
  function countSmileys55(arr: any) {
    const validSmileyRegex = /[:;][-~]?[)D]/;
    return arr.filter((smiley: any) => validSmileyRegex.test(smiley)).length;
  }
  interface testCasesType {
    input: String[];
    output: Number;
  }
  // Unit test using Jest
  const testCases: testCasesType[] = [
    { input: [":)", ";(", ";}", ":-D"], output: 2 },
    { input: [":)", ":(", ":D", ":O", ":;"], output: 2 },
    { input: [":~)", ";~D", ":)", ":D", ":~", ";~", ":~D", ";~D"], output: 4 },
  ];
  describe('My test case CountSmileys', () => {
  testCases.forEach((testCase: testCasesType, index) => {
    test(`Test case ${index + 1}`, () => {
      expect(countSmileys55(testCase.input)).toBe(testCase.output);
    });
  });
});
  
};

export default CountSmileys;

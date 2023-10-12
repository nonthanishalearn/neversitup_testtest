import React from "react";

const Permutations = () => {
  const result: [] = [];
  function generatePermutations(s: any, current: any) {
    if (s.length === 0) {
      result.push(current);
      return;
    }
    for (let i = 0; i < s.length; i++) {
      const nextChar = s[i];
      const remainingChars = s.slice(0, i) + s.slice(i + 1);
      generatePermutations(remainingChars, current + nextChar);
    }
  }
  function getPermutations(inputStr: string) {
    generatePermutations(inputStr, "");
    return result;
  }

  const input1 = "a";
  console.log(getPermutations(input1)); // ['a']

  const input2 = "ab";
  console.log(getPermutations(input2)); // ['ab', 'ba']

  const input3 = "abc";
  console.log(getPermutations(input3)); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

  const input4 = "aabb";
  console.log(getPermutations(input4));
  return <div className="bg-gray-500">permutations</div>;
};

export default Permutations;

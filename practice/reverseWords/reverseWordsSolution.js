// Solutions For Tests
// String Solution
// function reverseWords(textArray) {
//   if (textArray.join("").trim().split(" ").length < 2) {
//     input = textArray;
//   } else {
//     textArray = textArray.join("").split(" ");
//     let reversedText = "";
//     for (let i = textArray.length - 1; i >= 0; i--) {
//       reversedText += textArray[i] + " ";
//     }
//     input = reversedText.trim().split("");
//   }
// }
// Array Solutions

  // Push Method
  // function reverseWords(textArray) {
  //   if (textArray.join("").trim().split(" ").length < 2) {
  //     input = textArray;
  //   } else {
  //     textArray = textArray.join("").split(" ");
  //     let reversedTextArray = [];
  //     for (let i = textArray.length - 1; i >= 0; i--) {
  //       reversedTextArray.push(textArray[i]);
  //     }
  //     input = reversedTextArray.join(" ").split("");
  //   }
  // }
  // 3 Replacing
  // function reverseWords(textArray) {
  //   if (textArray.join("").trim().split(" ").length < 2) {
  //     input = textArray;
  //   } else {
  //     textArray = textArray.join("").split(" ");
  //     for (let i = 0, j = textArray.length - 1, k = ""; i < j; i++, j--) {
  //       k = textArray[i];
  //       textArray[i] = textArray[j];
  //       textArray[j] = k;
  //     }
  //     input = textArray.join(" ").split("");
  //   }
  // }
  // Solution Without Reassigning Input
//   function reverseWords(message) {
//     let result = message;
//     message.reverse();
//     let xthWord = "";
//     let counter = 0;
//     for (let i = 0; i < message.length + 1; i++) {
//       if (message[i] === " " || i === message.length) {
//         for (let j = 0; j < xthWord.length; j++) {
//           result[counter + j] = xthWord[xthWord.length - j - 1];
//         }
//         counter = i + 1;
//         xthWord = "";
//         continue;
//       }
//       xthWord += message[i];
//     }
//     return result;
//   }
//   Tests
  let desc = "Don't reverse single word";
  let input = "Clarusway".split("");
  reverseWords(input);
  let actual = input.join("");
  let expected = "Clarusway";
  assertEqual(actual, expected, desc);
  desc = "Inspring Quote #1";
  input = "days. big make things Little".split("");
  reverseWords(input);
  actual = input.join("");
  expected = "Little things make big days.";
  assertEqual(actual, expected, desc);
  desc = "Inspring Quote #2";
  input = "impossible. mean not does hard but hard, be to going It’s".split("");
  reverseWords(input);
  actual = input.join("");
  expected = "It’s going to be hard, but hard does not mean impossible.";
  assertEqual(actual, expected, desc);
  desc = "Inspring Quote #3";
  input = "done. you’re when Stop tired. you’re when stop Don’t".split("");
  reverseWords(input);
  actual = input.join("");
  expected = "Don’t stop when you’re tired. Stop when you’re done.";
  assertEqual(actual, expected, desc);
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(a, b)
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} ≠ ${b}`);
    }
  }
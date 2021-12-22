import React, { useState } from 'react';

const TextArea = ({ corrections }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    let incorrectWords = Object.keys(corrections);
    setText(value);
    let strArr = text.split(' ');
    strArr.map((word, i) => {
      if (incorrectWords.includes(word)) {
        strArr[i] = corrections[word];
        setText(strArr.join(' '));
      }
      return true;
    });
  };
  return (
    <>
      <textarea
        onChange={handleChange}
        placeholder="Please include 'wierd' & 'realy' in your sentence."
        value={text}
        rows="10"
        cols="50"
      />
    </>
  );
};

export default TextArea;

// if (value.includes(incorrectWords[0])) {
//   let newStr = value.replace(
//     incorrectWords[0],
//     corrections[incorrectWords[0]]
//   );
//   setText(newStr);
// } else if (value.includes(incorrectWords[1])) {
//   let newStr = value.replace(
//     incorrectWords[1],
//     corrections[incorrectWords[1]]
//   );
//   setText(newStr);
// } else {
//   setText(value);
// }

// for (let word of incorrectWords) {
//   if (value.includes(word)) {
//     let newStr = value.replace(word, corrections[word]);
//     console.log(value, word, corrections[word], newStr);
//     setText(newStr);
//   }
// }

//Right Answer
// onChange={(e) => {
//   setText(e.target.value);
//   const strArr = text.split(" ");
//   const obj = {
//     "tmrw": "tomorrow",
//     "birtday":"birthday"
//   };
//   const objArr = Object.getOwnPropertyNames(obj);
//   strArr.map((d, i) => {
//     const n = objArr.indexOf(d);
//     if (n !== -1) {
//       strArr[i] = obj[objArr[n]];
//       setText(strArr.join(" ")+" ");
//     }
//     return true;
//   });
// }}

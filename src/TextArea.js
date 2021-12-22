import React, { useState } from 'react';

const TextArea = ({ corrections }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    let incorrectWords = Object.keys(corrections);
    if (value.includes(incorrectWords[0])) {
      let newStr = value.replace(
        incorrectWords[0],
        corrections[incorrectWords[0]]
      );
      setText(newStr);
    } else if (value.includes(incorrectWords[1])) {
      let newStr = value.replace(
        incorrectWords[1],
        corrections[incorrectWords[1]]
      );
      setText(newStr);
    } else {
      setText(value);
    }
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

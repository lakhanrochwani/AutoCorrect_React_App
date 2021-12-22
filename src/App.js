import React from 'react';
import TextArea from './TextArea.js';
import './style.css';

export default function App() {
  let corrections = {
    xy: 'x',
    y: 'z',
    abc: 'bc',
  };
  return (
    <div>
      <TextArea corrections={corrections} />
    </div>
  );
}

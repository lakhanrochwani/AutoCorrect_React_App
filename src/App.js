import React from 'react';
import TextArea from './TextArea.js';
import './style.css';

export default function App() {
  let corrections = {
    realy: 'really',
    wierd: 'weird',
  };
  return (
    <div>
      <TextArea corrections={corrections} />
    </div>
  );
}

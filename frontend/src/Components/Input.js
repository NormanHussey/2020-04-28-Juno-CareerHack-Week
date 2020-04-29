import React, { useState } from 'react';

function Input({ inputChange }) {
  return (
    <textarea onChange={inputChange} className="input" name="inputText" id="inputText"></textarea>
  );
}

export default Input;
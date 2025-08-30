import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React, { useState } from 'react';

const SimpleHome = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Показать скрытый текст
      </button>
      <div style={visible ? {display: "none"} : {display: "block"}}>
        Hello world!
      </div>
    </div>
  );
};

const ValidationInput = () => {
    const [text, setText] = useState('')

    return (
        <>
        <label htmlFor="inputValidation">inputValidation</label>
        <input id="inputValidation" name="inputValidation" value={text} onChange={(e) => setText(e.target.value)} />
        </>
    )
}

describe('validation and click', () => {
    test('button shows hidden text', () => {
      render(<SimpleHome />);
      
      const button = screen.getByRole('button', { name: /показать скрытый текст/i });
      fireEvent.click(button);
      
      const message = screen.getByText("Hello world!");
      expect(message).toBeInTheDocument();
    });

    test('validation', () => {
        render(<ValidationInput />)
        const input = screen.getByLabelText(/inputValidation/i)
        fireEvent.change(input, {target: {value: "hello"}})
        expect(input).toHaveValue("hello")
        expect(input.value).toHaveLength(5)
    })
})
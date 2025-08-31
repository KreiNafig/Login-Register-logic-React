import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React, { useState } from 'react';

const SimpleHome = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button name="text" onClick={() => setVisible(!visible)}>
        Показать скрытый текст
      </button>
      <div style={visible ? {display: "none"} : {display: "block"}}>
        Hello world!
      </div>
    </div>
  );
};

const ValidationInput = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [valid, setValid] = useState(false)

    function handleSubmit() {
        setValid(true)
    }

    return (
        <>
        {valid 
        ? 
        <div>Данные отправленные</div> 
        :
        <form onSubmit={() => handleSubmit()}>
        <label htmlFor="Login">Login</label>
        <input id="Login" name="inputValidation" value={login} onChange={(e) => setLogin(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Отправить данные</button>
        </form>
        }
        </>
    )
}

describe('validation and click', () => {
    test('button shows hidden text', () => {
      render(<SimpleHome />);
      
      const button = screen.getByRole('button', { name: /показать скрытый текст/i });
      userEvent.click(button);
      
      const message = screen.getByText("Hello world!");
      expect(message).toBeInTheDocument();
    });

    test('validation', () => {
      render(<ValidationInput />);
      
      const inputLogin = screen.getByLabelText(/login/i);
      const inputPassword = screen.getByLabelText(/password/i)
      const buttonSubmit = screen.getByRole('button', {name: /отправить данные/i})
      
      userEvent.type(inputLogin, "Login");
      userEvent.type(inputPassword, "Password")

      
      expect(inputLogin).toHaveValue("Login");
      expect(inputLogin.value).toHaveLength(5);
      expect(inputPassword).toHaveValue("Password")
      expect(inputPassword.value).toHaveLength(8)

      userEvent.click(buttonSubmit)
        const message = screen.getByText(/данные отправленные/i)
        expect(message).toBeInTheDocument()
    });
});
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import Home from "../pages/Home";



describe('component func', () => {
    test('buttonComp', () => {
        render(<Home />)
        const button = screen.getByRole('button', { name: /visible/i })
        fireEvent.click(button)
        const message = screen.getByText("Hello world!")
        expect(message).toBe("Hello world!")
    })
})


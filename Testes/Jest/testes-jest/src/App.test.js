import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe(`teste do componente App`, () => {
  test(`deve renderizar o componente App`, () => {
    render(<App />);
    expect(screen.getByText("cadastrar")).toBeInTheDocument();
  });

  test(`deve adicionar uma tarefa`, () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("campo-tarefa"), {
      target: { value: "estudar" },
    });
    fireEvent.click(screen.getByTestId("botao-cadastrar"));
    expect(screen.getByText("estudar")).toBeInTheDocument();
  });
});

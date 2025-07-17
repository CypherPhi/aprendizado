import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "../index";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve verificar se possui 2 comentarios", () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId("campo-comentario"), {
      taget: { value: "Primeiro comentario" },
    });
    fireEvent.click(screen.getByTestId("botao-comentar"));

    fireEvent.change(screen.getByTestId("campo-comentario"), {
      taget: { value: "Segundo comentario" },
    });
    fireEvent.click(screen.getByTestId("botao-comentar"));

    expect(screen.getAllByTestId("listagem-comentario")).toHaveLength(2);
  });
});

import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaNova, setTarefaNova] = useState("");

  function cadastrar() {
    setTarefas([...tarefas, tarefaNova]);
    setTarefaNova("");
  }

  return (
    <div className="App">
      <input
        type="text"
        data-testid="campo-tarefa"
        placeholder="Digite algo..."
        value={tarefaNova}
        onChange={(e) => setTarefaNova(e.target.value)}
      />
      <button data-testid="botao-cadastrar" onClick={cadastrar} type="button">
        cadastrar
      </button>
      <ul>
        {tarefas.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

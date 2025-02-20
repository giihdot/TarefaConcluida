
import Tarefas from "./Components/Lista_Tarefas";
import Botao from "./Components/Botao";
import "./App.css";

function App() {
  return (
    <>
      <h1> TAREFAS COTIDIANAS </h1>
      <div className="Botao">
      <Tarefas
        tarefa1="ARRUMAR A CAMA 🛏"
        texto1="Comece o dia com uma pequena vitória! Deixe seu quarto organizado."
      />
      <Botao/>
      </div>
    

      <Tarefas tarefa2="BEBER ÁGUA 🥤" texto2="Hidrate-se durante o dia." 
      />

      <Tarefas
        tarefa3="ORGANIZAR A CASA 🏡"
        texto3="Pode ser uma mesa, um armário, um ambiente dentro de sua própia casa."
      />

      <Tarefas
        tarefa4="OUVIR UMA MÚSICA QUE TE FAZ FELIZ 🎧"
        texto4="Dê um play na sua música favoita e aproveite o momento."
      />

      <Tarefas
        tarefa5="FAZER UMA CAMINHADA OU ALONGAMENTO 🧘🏻‍♂️"
        texto5="Um pouco de movimento sempre faz bem!"
      />

      <Tarefas
        tarefa6="MOMENTO DE DESCONEXÃO 📴"
        texto6="Tire um tempo longe das telas para relaxar."
      />

      <Tarefas
        tarefa7="PLANEJAR UMA REFEIÇÃO SAUDÁVEL 🥗"
        texto7="Um pouco de movimento sempre faz bem!"
      />

      <Tarefas
        tarefa8="FAZER ALGO POR VOCÊ 💆🏻‍♀️"
        texto8="Pode ser um skincare, ler um livro, tomar um chá... Algo que faça você se sentir melhor e mais conectada com seu eu interior."
      />
      <Botao />
    </>
  );
}

export default App;

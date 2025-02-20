import "./Lista_Tarefa.css";
import Tarefas from "./Botao";

function Tarefa() {
  return (
    <>
      <h1> TAREFAS COTIDIANAS </h1>
      <div className="Junt1">
        <div className="Junt2">
          <Tarefas
            tarefa="ARRUMAR A CAMA 🛏"
            texto="Comece o dia com uma pequena vitória! Deixe seu quarto organizado."
          />

          <Tarefas tarefa="BEBER ÁGUA 🥤" texto="Hidrate-se durante o dia." />

          <Tarefas
            tarefa="ORGANIZAR A CASA 🏡"
            texto="Pode ser uma mesa, um armário, um ambiente dentro de sua própia casa."
          />

          <Tarefas
            tarefa="OUVIR UMA MÚSICA QUE TE FAZ FELIZ 🎧"
            texto="Dê um play na sua música favoita e aproveite o momento."
          />
        </div>
        <div className="Junt2">
          <Tarefas
            tarefa="FAZER UMA CAMINHADA OU ALONGAMENTO 🧘🏻‍♂️"
            texto="Um pouco de movimento sempre faz bem!"
          />

          <Tarefas
            tarefa="MOMENTO DE DESCONEXÃO 📴"
            texto="Tire um tempo longe das telas para relaxar."
          />

          <Tarefas
            tarefa="PLANEJAR UMA REFEIÇÃO SAUDÁVEL 🥗"
            texto="Um pouco de movimento sempre faz bem!"
          />

          <Tarefas
            tarefa="FAZER ALGO POR VOCÊ 💆🏻‍♀️"
            texto="Pode ser um skincare, tomar um chá... Algo que faça você se sentir melhor."
          />
        </div>
      </div>
    </>
  );
}
export default Tarefa;

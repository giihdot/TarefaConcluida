import "./Lista_Tarefa.css";

function Tarefa(props) {
  return (
    <>
      <div className="Taref_Compl">
        <h3> {props.tarefa1} </h3>
        <p> {props.texto1} </p>
      </div>
<br/>
      <div className="Taref_Compl">
        <h3> {props.tarefa2} </h3>
        <p> {props.texto2} </p>
      </div>
      <br/>
      <div className="Taref_Compl">
        <h3> {props.tarefa3} </h3>
        <p> {props.texto3} </p>
      </div>
      <br/>
      <div className="Taref_Compl">
        <h3> {props.tarefa4} </h3>
        <p> {props.texto4} </p>
      </div>
      <br/>
      <div className="Taref_Compl">
        <h3> {props.tarefa5} </h3>
        <p> {props.texto5} </p>
      </div>
      <br/>
      <div className="Taref_Compl">
        <h3> {props.tarefa6} </h3>
        <p> {props.texto6} </p>
      </div>
      <br/>
      <div className="Taref_Compl">
        <h3> {props.tarefa7} </h3>
        <p> {props.texto7} </p>
      </div>
      <br/>
      <div className="Taref_Compl">
        <h3> {props.tarefa8} </h3>
        <p> {props.texto8} </p>
      </div>
    </>
  );
}
export default Tarefa;

import { useState } from "react"
import "./Botao.css" 

function Tarefas(props) {
    const [Concluida, setFeito] = useState(false)

    function MudarTarefa() {
        setFeito(true) 
        alert ("Atividade Concluída!")
    }

    return(
        <div className="Taref_Compl">

            <h3 className={Concluida ? "Concluido" : ""} > {props.tarefa} </h3>
            <p className={Concluida ? "Concluido" : ""}>  {props.texto} </p>
            

            
            <button 
            onClick={MudarTarefa} 
            disabled={Concluida}>
            {Concluida ? "Concluído" : "Concluir"} 
            </button>
            
        </div>
    )
}

export default Tarefas



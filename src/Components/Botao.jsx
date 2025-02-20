import { useState } from "react"
import "./Botao.css" 

function Tarefas() {
    const [Concluida, setFeito] = useState(false)

    function MudarTarefa() {
        setFeito(true) 
    }

    return(
        <div className="Tarefinha">
            <button 
            onClick={MudarTarefa} 
            className={Concluida ? "Concluido" : ""} 
            >
            </button>
        </div>
    )
}

export default Tarefas



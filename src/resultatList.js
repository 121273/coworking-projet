import { useState } from "react"


const Afficher = ({list, inputValue}) => {

        const [result, setResult] = useState([])

        function filterList() {
        let result = list.filter(e => (inputValue.trim()).toLowerCase() === e.type)
        setResult(result)
        
}

        return(

        <div>

        <button onClick={filterList}>rechercher</button>

        <h3>le type: {inputValue}</h3>

        <ul>
                {result.map(e => 
                        <li>{e.nom}</li>
                )}
        </ul>
        </div>





        
        )

}

export default Afficher;


const Chercher = ({ setInputValue}) => {



    function recherche(e) {
        setInputValue(e.target.value)
    }

    

    return(
        
        <div>
            <label>Entrer le mot clé de recherche</label>
            <input onChange={recherche} type="text"></input>
        </div>
    );
}

export default Chercher;

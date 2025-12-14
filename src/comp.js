

export default function Card() {
    const myVoiture = {
        Matricule: "19383X9",
        Marque: "Toyota",
        chevaux: 8

    }
    
    return (
        <div>
            <h1 style={{color: '#00FF00'}}>Informations Voiture</h1>
            <pre>
                voiture matricule: {myVoiture.Matricule}
            <br></br>
                marque: {myVoiture.Marque} 
            <br></br>
                nombre chevaux: {myVoiture.chevaux}
            </pre>
        </div>
    )
}
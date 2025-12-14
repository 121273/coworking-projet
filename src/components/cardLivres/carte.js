import { useState } from "react";

const CarteLivre = ({livre}) => {



    const[like, setLike] = useState(
        [
            {0 : 0 },
            {1 : 0 },
            {2 : 0 }
        ]
    )


    const handleLike = (index) =>{
        const table = [...like]
        table[index][index] += 1
        setLike(table)
    }





    // const livres =[
    //     {nom : "said"},
    //     {prenom : "el said"},
    // ]
    // livres.forEach((e, i) => 
    //     console.log(i)
    // )
    return ( 

        livre.map((Livre, i) => 
    
        <div className="card m-3 flex-grow-1 " style={{width: "18rem"}}>
            <img src={Livre.poster} alt='not-found' className="card-img-top" ></img>
        <div className="card-body">
            <h5 className="card-title">{Livre.titre}</h5>
            <pre className="card-text">
                Auteur: {Livre.auteur}
<br></br>
                Edition: {Livre.Edition}
                </pre>
            <button onClick={()=>handleLike(i)} className="btn btn-outline-primary " >Like({like[i][i]})</button>
        </div>
        </div>
        )
    );
}

export default CarteLivre;
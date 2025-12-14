import { useState } from "react";
import femme from './images/femme.png';
import homme from './images/homme.png';

const PoidIdeal = () => {

    const [tailleResult, setTailleResult] = useState(0)

    const [genre, setGenre] = useState(' ')
    const handleGenre = (e) =>{
        if(e.target.value === "homme"){
            setGenre(homme)
        }else if(e.target.value === 'femme'){
            setGenre(femme)
        }else{

            setGenre(' ')
        }
    }


    const [taille, setTaille] = useState('form-control mb-4');
    
    const handleTaille = (e) =>{
        if(e.target.value < 150 || isNaN(e.target.value)){
            setTaille('form-control mb-4 is-invalid')
        }else{
            setTaille('form-control mb-4 is-valid')
            setTailleResult(e.target.value)
        }
    }

    const [Poids, setPoids] = useState(' ')

    const affichePoids = () =>{
        if(genre === homme && tailleResult > 0){
            setPoids(tailleResult - 100 - (tailleResult - 150) / 4)
        }else if(genre === femme && tailleResult > 0 ){
            setPoids(tailleResult - 100 - (tailleResult - 150) / 2.5)
        }else{
            setPoids('merci de tapez la taille et le genre')
        }
    }
    





    return ( 
        <form>

        <div className="container m-5 border border-5 border-warning rounded p-5">
            <label className="form-label">Taille en CM :</label>
            <input className={taille}    required   type="text" onChange={handleTaille} ></input>
            <label className="form-label">Gènre :</label>
            

            <select required  onChange={handleGenre} className="form-select mb-5"  >
                <option  value={""}>Choisissez le Gènre</option>
                <option  value={'homme'}>Homme</option>
                <option value={'femme'}>Femme</option>
            </select>
            <div className="mb-5 col-6 mx-auto ">  
                <img src={genre} className="w-25"  alt='merci-de-choisissez-un-genre'></img>
            </div>
                
            <label className="form-label">Poids idéal :</label>
            <input readOnly value={Poids}  className="form-control mb-4" required  type="text"></input>
            <div className="d-grid  mx-auto">
            <button onClick={affichePoids} type="button" className="btn btn-outline-warning mt-3 fw-semibold fs-2" >Calculer</button>
            </div> 
         
        </div>
        </form>

     );
}
 
export default PoidIdeal;

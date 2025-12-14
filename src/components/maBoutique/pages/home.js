
import { useNavigate } from "react-router-dom";
const Page = () => {
    const navigate = useNavigate()
    return ( 
        <div className="laPage">
            <h3>Ma Boutique</h3>
            <div>
                <h2>Bienvenue !</h2>
                <p>Découvrez nos produits</p>
                <button onClick={()=>navigate('/list-products')}>voir les produits </button><br></br>
            </div>
        </div>
    );
};



export default Page;
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";


const Products = () => {

    const navigate = useNavigate()

    function navigated(id) {
        navigate(`/produit/${id}`)
    }

   
    return ( 
        <div className="laPage">
            <h3>Listes Des Produits</h3>
            <div className="nav">
                <span>
                    <babel>Catégories: </babel>
                    <select>
                        <option selected>Toutes</option>
                    </select>
                </span>

                <p>12 produits trouvés</p>
            </div>
            <div className="parent">
                    {products.map((p) => 
                <div className="card">
                    
                    <div>
                    <img alt={p.image}></img>
                    </div>
                    <div className="desc">
                        <p>Produit: {p.id}</p>
                        <span>*****</span>
                        <mark>{p.price} DH</mark>
                        <button onClick={()=>navigated(p.id)} >Voir</button>
                    </div>
                    
                </div>
                    )} 
            </div>
        </div>
    );
}

export default Products;
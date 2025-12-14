import { useParams } from "react-router-dom";
import { products } from "../data/products";

const DetailProduct = () => {

    const {id} = useParams()

    const product = products.find(p => p.id == id)

    if(!product){
        return(
            <h2>Produit introuvable</h2>
        )
    }


    

    return ( 
            <div className="DProduct">
            <p>Retour aux Produits</p>
            <div className="product-card">
                <img alt="not found"></img>
                <div className="product-detail">
                    <h2>{product.name}</h2>
                    <h4>******</h4> 
                    <mark>{product.price} DH</mark><br></br>
                    <p>Description: </p>
                    <p>
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
        )
}

export default DetailProduct;
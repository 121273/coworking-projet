import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ReservationDetail({arrayForm}) {




const {id} = useParams() 

return (
<div className="container py-4">
<h2>Détail de la Réservation</h2>



{arrayForm.map((e, i) => Number(id) === i + 1 ?

            <div className="card p-4 mt-3">
        <p><strong>Espace :</strong> {e.select}</p>
<p><strong>Date :</strong>  {e.date}</p>
<p><strong>Heure :</strong> {e.hDebut} - {e.hFin}</p>
<p><strong>Client :</strong> {e.nom}</p>
<p><strong>Statut :</strong> Confirmée</p>
</div>: <div >product not-found</div>
)}




<Link to="/reservations" className="btn btn-secondary mt-3">Retour</Link>
</div>
)}


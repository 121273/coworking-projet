import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
export default function ReservationsList({arrayForm}) {




return (
<div className="container py-4">
<h2 className="mb-3">Liste des Réservations</h2>
<Link to="/reservations/ajouter" className="btn btn-primary mb-3">Ajouter une réservation</Link>


<table className="table table-bordered table-striped">
<thead>
<tr>
<th>ID</th>
<th>Espace</th>
<th>Date</th>
<th>Client</th>
<th>Statut</th>
<th>Actions</th>
</tr>
</thead>
<tbody>

    {arrayForm.map((e, i) => {
            return (
                <tr>
                <td>{i + 1}</td>
                <td>{e.select}</td>
                <td>{e.date}</td>
                <td>{e.nom}</td>
                <td><span className="badge bg-success">Confirmée</span></td>
                <td><Link to={`/reservations/${i+1}`} className="btn btn-sm btn-dark">Détails</Link></td>
                
            </tr>
        )
    })}
</tbody>
</table>
</div>
);
}
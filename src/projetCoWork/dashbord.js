export default function Dashboard() {
return (
<div className="container py-4">
<h2>Dashboard</h2>


<div className="row mt-4">
<div className="col-md-3">
<div className="card p-3 text-center">
<h5>Revenu du Jour</h5>
<p>0 DH</p>
</div>
</div>


<div className="col-md-3">
<div className="card p-3 text-center">
<h5>Revenu du Mois</h5>
<p>0 DH</p>
</div>
</div>


<div className="col-md-3">
<div className="card p-3 text-center">
<h5>Taux d'occupation</h5>
<p>0%</p>
</div>
</div>


<div className="col-md-3">
<div className="card p-3 text-center">
<h5>Espace le plus réservé</h5>
<p>-</p>
</div>
</div>
</div>
</div>
);
}
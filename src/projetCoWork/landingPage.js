import { Link } from "react-router-dom";

export default function Landing() {
return (
  
  <div class="container-fluid p-0 bg-dark">
   


  <section class="hero d-flex align-items-center text-white"
    style={{'height': '90vh', 'background': "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1500&q=80') center/cover,"}}>
    <div class="container text-center">
      <h1 class="display-3 fw-bold">CoWork Casa</h1>
      <p class="lead mt-3">L'espace idéal pour travailler, créer et collaborer à Casablanca</p>
      <Link to="/reservations/ajouter" class="btn btn-primary btn-lg mt-4 px-4 py-2">Réserver Maintenant</Link>
    </div>
  </section>

  <section class="py-5 text-center">
    <div class="container">
      <h2 class="fw-bold mb-4">Nos Services</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card shadow-sm p-4">
            <i class="bi bi-wifi display-4 text-primary"></i>
            <h5 class="mt-3 fw-bold">Internet Haut Débit</h5>
            <p>Connexion rapide et stable pour booster votre productivité.</p>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card shadow-sm p-4">
            <i class="bi bi-people display-4 text-primary"></i>
            <h5 class="mt-3 fw-bold">Salle de Réunion</h5>
            <p>Des espaces calmes pour vos réunions professionnelles.</p>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card shadow-sm p-4">
            <i class="bi bi-cup-hot display-4 text-primary"></i>
            <h5 class="mt-3 fw-bold">Espace Détente</h5>
            <p>Café, snacks et ambiance conviviale pour vous relaxer.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 bg-light">
    <div class="container text-center">
      <h2 class="fw-bold mb-4">Nos Tarifs</h2>
      <div class="row justify-content-center">

        <div class="col-md-4">
          <div class="card shadow p-4">
            <h4 class="fw-bold">Pass Journalier</h4>
            <p class="display-6 fw-bold text-primary">100 DH</p>
            <p>Accès complet à tous les espaces de coworking.</p>
            <a href="/reservations/ajouter" class="btn btn-outline-primary">Réserver</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <footer class="py-4 bg-dark text-white text-center">
    <p class="mb-0">© 2025 CoWork Casa - Tous droits réservés</p>
  </footer>

</div>

);
}
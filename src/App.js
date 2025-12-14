import './App.css';
import LandingPage from './projetCoWork/landingPage';
import Planning from './projetCoWork/planning';
import ReservationsList from './projetCoWork/reservationList';
import ReservationDetail from './projetCoWork/reservationDetail';
import AddReservation from './projetCoWork/addReservation';
import Dashboard from './projetCoWork/dashbord';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [arrayForm, setArrayForm] = useState([
])


  return(


    <div className='col-12'>
      <BrowserRouter>
     <nav className="navbar  bg-primary col-12 ">
        <div className="container-fluid ">
            <a className="navbar-brand text-white" href="#">Coworking Casa</a>
            <ul className="navbar-nav d-flex flex-row gap-3 ">
                <li className="nav-item ">
                    <Link className="nav-link text-white" to='/'>Home</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link text-white" to='/planning'>Planning</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link text-white" to='/reservations'>Reservations</Link>
                </li>

            </ul>
        </div>

    </nav>


    {/* <LandingPage/> */}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/planning' element={<Planning/>}/>
        <Route path='/reservations' element={<ReservationsList  arrayForm={arrayForm} setArrayForm={setArrayForm}/>}/>
        <Route path='/reservations/:id' element={<ReservationDetail arrayForm={arrayForm} setArrayForm={setArrayForm} />}/>
        <Route path='reservations/ajouter' element={<AddReservation arrayForm={arrayForm} setArrayForm={setArrayForm}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  )

}





export default App;

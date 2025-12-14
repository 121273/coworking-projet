import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddReservation({arrayForm, setArrayForm}) {







const [selectValue, setSelectValue] = useState("")
const [date, setDate] = useState("")
const [hDebut, setHDebut] = useState("")
const [hFin, setHFin] = useState("")
const [email, setEmail] = useState("")
const [nom, setNom] = useState("")


const handelSelect = (e) => {
    setSelectValue(e.target.value)
}
const handelDate = (e) => {
    setDate(e.target.value)
}
const handelHDebut = (e) => {
    setHDebut(e.target.value)
}
const handelHFin = (e) => {
    setHFin(e.target.value)
}
const handelEmail = (e) => {
    setEmail(e.target.value)
}
const handelNom = (e) => {
    setNom(e.target.value)
}

const navigate = useNavigate()

const handelForm = (e) =>  {
    e.preventDefault()

    
        setArrayForm([...arrayForm, {
            select: selectValue, 
            date: date,
            hDebut: hDebut,
            hFin: hFin,
            email: email,
            nom: nom}])

        navigate('/reservations')
        }

















return (
<div className="container py-4 ">
<h2>Créer une Réservation</h2>


<form className="row g-3 mt-3" onSubmit={handelForm}>
<div className="col-md-6">
<label className="form-label">Espace</label>
<select name='select' value={selectValue}  onChange={handelSelect} required   className ='form-select'  >
<option value={''} selected >choisir une option</option>   
<option value={'Bureau Privé'}>Bureau Privé</option>
<option value={'Salle Réunion A'}>Salle Réunion A</option>
<option value={'Salle Réunion B'}>Salle Réunion B</option>
<option value={'Open Space'}>Open Space</option>
</select>
</div>


<div className="col-md-6">
<label className="form-label">Date</label>
<input name="date" value={date} onChange={handelDate} type="date" required  className='form-select' />
</div>


<div className="col-md-6">
<label className="form-label">Heure début</label>
<input name="hDebut" type="time" onChange={handelHDebut} required  value={hDebut} className='form-select' />
</div>


<div className="col-md-6">
<label className="form-label">Heure fin</label>
<input name="hFin" type="time" onChange={handelHFin} required  value={hFin} className='form-select' />
</div>


<div className="col-md-6">
<label className="form-label" >Nom client</label>
<input  type="text" value={nom} onChange={handelNom} required className="form-control" />
</div>


<div className="col-md-6">
<label className="form-label">Email</label>
<input name="email" type="email" onChange={handelEmail} required value={email}  className='form-select' />
</div>


<div className="col-md-12">
<label className="form-label" >Nombre de personnes</label>
<input type="number" className="form-control" />
</div>


<div className="col-12">
<button type="submit" className="btn btn-primary">Créer</button>
</div>
</form>
</div>
);
}
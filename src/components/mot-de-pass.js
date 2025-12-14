import { useState } from "react"

function Password() {



    const [nbrWords, setNbrWord ] = useState('password doit avoir au moins 4 caractère')


    function count(e) {
        const champValue = e.target.value 
        let strValue = champValue.split('')
        if(strValue.length >= 4){
            setNbrWord('')
        }else{
            setNbrWord('password doit avoir au moins 4 caractère')
        }
    }


    return(
        <>
            <label>entrez le mot de pass</label> 
            <input onChange={count}   type="password"></input>
            <span>{nbrWords}</span>
        </>
    )
}

export default Password;
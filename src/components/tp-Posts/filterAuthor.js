import { useState } from "react"

const FilterAuthor = ({blogs}) => {


    const [selectValue, setSelectValue] = useState('not found')

    function filtrerAuthor(e) {
        setSelectValue(e.target.value)
    }

    const result = blogs.filter(e => e.author === selectValue)
    

    
    return( 
        <div>

            <select onChange={filtrerAuthor}>
                <option selected >--Filtrer par Auteur--</option>
                {blogs.map(e => <option value={e.author} >{e.author}</option>)}
            </select>

        <div>

            {result.map(e => 

                <div style={{
                    border:'2px solid',
                    padding:'5px',
                    margin:'2px'
                }}>

                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <span>{e.author}</span>
                </div>)}
        </div>
        </div>
        
        
    );
}

export default FilterAuthor;
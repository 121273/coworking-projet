


const AfficherList = ({blog,setBlogs, supprimer}) => {

    
    return ( 
        blog.map((e) =>  

            <div style={{
                border:'2px solid',
                padding:'10px',
                margin:'9px'
            }}>
                <h2>{e.title}</h2>
                <span>{e.author}</span>
                <p>{e.body}</p>
                <button onClick={() => supprimer(e.id)}>Delete</button>

        </div>     
            )
        )
    }

export default AfficherList;



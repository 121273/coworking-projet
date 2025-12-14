
const SectionBar = ({blogs, setBlogs}) => {

    function supprimer(id) {
        const result = blogs.filter(post => post.id !== id )
        setBlogs(result)
        

    }

    

    return ( 
        <div >

        {blogs.map(e => 

        <div style={{
            border:'2px solid',
            padding:'5px',
            margin:'2px'
        }}>

                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <span>{e.author}</span>
                <div>

                <button onClick={()=>supprimer(e.id)}>Delete</button>
                </div>
        </div>

)}
        
                </div>     
    )
}

export default SectionBar;
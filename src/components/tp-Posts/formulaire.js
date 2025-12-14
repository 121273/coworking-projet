import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = ({blogs, setBlogs}) => {

    const navigate = useNavigate();

    // handel-Value
    const [nom, setNom] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");


    // handel-Error
    const [nomError, setNomError] = useState("");
    const [bodyError, setbodyError] = useState("");
    const [authorError, setauthorError] = useState("");

    
    // recuperer les inputs-values
    function handelNom(e) {
        setNom(e.target.value)
    }

    function handelBody(e) {
        setBody(e.target.value)
    }
    function handelAuthor(e) {
        setAuthor(e.target.value)
    }



    // executé après submit du formulaire 
    function handleForm(e) {
        e.preventDefault();

        if(!nom){
            setNomError("invalid name")
        }else{
            setNomError("")
        }
        if(!body){
            setbodyError("invalid name")
        }else{
            setbodyError("")
        }
        if(!author){
            setauthorError("invalid name")
        }else{
            setauthorError('')
        }

        if(nom === ''){
            return 
        }
        if(body === ''){
            return 
        }
        if(author === ''){
            return 
        }
            
            const newBlog = {
                id : blogs.length + 1,
                title: nom,
                body: body,
                author: author
            }
            
            setBlogs([...blogs, newBlog]);


            navigate('/articles')
                    
                
            
            setNom('');
            setBody('');
            setAuthor('');
            
            
        }
        
    
    return ( 
        <form onSubmit={handleForm}>
            <label>Title:</label>
            <input onChange={handelNom} value={nom} type="text"/>
            <p>{nomError}</p>
            <label>Body:</label>
            <textarea onChange={handelBody} value={body}></textarea>
            <p>{bodyError}</p>
            <label>Author:</label>
            <input type="text" onChange={handelAuthor} value={author}/>
            <p>{authorError}</p>
            <button  >soumission</button>
        </form>
    );
}

export default AddPost;
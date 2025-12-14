import AfficherList from "./BlogList.js"
import { useState } from "react"


function Home() {
const [blogs, setBlogs] = useState([
    {id:1, title:'js', body:'....', author:'rami'},
    {id:2, title:'css', body:'....', author:'sami'},
    {id:3, title:'html', body:'....', author:'sara'},
]) 

const supprimer = (id) => {
    const newBlogs = blogs.filter((e) => e.id !== id)
    setBlogs(newBlogs)
}


    return(
        <AfficherList blog={blogs} supprimer={supprimer} />
    )
}

export default Home;


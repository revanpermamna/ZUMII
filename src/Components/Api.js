import react, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Footers from './Footer'

function Api () {
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (

        
    <div>
        <Navbar/>
        <ul>
            {
                posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        <Footers/>
    </div>
    
   )

}

export default Api

import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'

function home() {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  
  return (
    <div className='bg-gray-700 flex h-screen'>
      
     <div className='w-full bg-gray-700'>
      <h1 style={styles.logo}>Personnel Blog</h1>
      <div className=' h-18 w-25  p-6 bg-gray-700 rounded-lg shadow-lg items-center justify-center flex '>
       
       <Navbar/>
     </div>
     </div>
      {posts.map((post) =>(
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.content.slice(0, 100)}...</p>
          <Link to={`/post/${post._id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}
const styles = {

  logo: { fontSize: "1.5rem",
    marginLeft: "",
  },
};


export default home
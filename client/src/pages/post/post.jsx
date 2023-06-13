import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Header from "../../components/header/header"
import Error404 from '../../components/Error404/'
import './post.css'



function Post () {
  const params = useParams()
  const id = params.id
  const [post, setPost] = useState('');

  const PF = "http://localhost:4000/uploads/";

  useEffect(() => {
      
      axios.get(`http://localhost:4000/posts/${id}`)
      .then((response) => {setPost(response.data); });
  }, []);
  console.log(post)
  if (!post) return (<Error404 />)

  else 
  return (
    <>
      <Header />
      <div className='item-container'>
        <div className='item-infos'>
          <h1>{post.title}</h1>
          <h2>{post.link}</h2>
          <h3>{post.description}</h3>
        </div>

        <div className='item-img'>
          <img src={PF + post.cover} className="item-pic" alt='' />

        </div>

      </div>

    </>
  )
  


}

export default Post
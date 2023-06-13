import axios from 'axios'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Header from "../../components/header/header"
import Loader from '../../components/loader/loader'
import  "./news.css"


const News = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false);}, 1000);
    }, []);

    const PF = "http://localhost:4000/uploads/";
    const [allPosts, setPosts] = useState(null);
  
    useEffect(() => {
        axios.get('http://localhost:4000/posts').then((response) => {
              setPosts(response.data);
        });
        }, []);

    if (loading)  return (<Loader />);

    if (!allPosts) return ("pas d annonce créée");
    console.log(allPosts)

    return (
        <div className="container">
            <Header />
            <div className="news-title"><h1>Latest News</h1></div>
            <div className='news-container'>

            {allPosts.map((post) => {
                return <Link to={`/posts/${post._id}`} key={post._id} className='post'>                 
                    <div className='post-infos'>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <div className='post-link'>{post.link}</div>
                    </div>
                    <div className='post-img'>
                        <img src={PF + post.cover} className="post-pic" alt='' />
                    </div>
                    
                </Link>
            })}
            </div>

        </div>
    )

}

export default News
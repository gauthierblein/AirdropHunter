import axios from 'axios'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Header from "../../components/header/header"
import Loader from '../../components/loader/loader'
import  "./airdrops.css"

const Airdrops = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false);}, 1000);
    }, []);
    
    
    const PF = "http://localhost:4000/uploads/";
    const [allAirdrops, setAllAirdrops] = useState(null);
  
    useEffect(() => {
        axios.get('http://localhost:4000').then((response) => {
              setAllAirdrops(response.data);
        });
        }, []);
    
    if (loading)  return (<Loader />);

    if (!allAirdrops) return ("pas d annonce créée");
    console.log(allAirdrops)


    return (
        <div className="container">
            <Header />
            <div className="airdrops-title"><h1>Latest Airdrops</h1></div>
            <div className='airdrops-container'>

            {allAirdrops.map((post) => {
                return <Link to={`/airdrops/${post._id}`} key={post._id} className='airdrops'>                 
                    <div className='airdrops-infos'>
                        <h2>{post.title}</h2>
                        <div>
                            <span className='span1'>Blockchain : </span><span className='span2'>{post.blockchain}</span>
                            <span className='span1'>Type : </span><span className='span2'>{post.category}</span>
                            <span className='span1'>Estimated time : </span><span className='span2'>{post.duration}</span >
                            <span className='span1'>Cost : </span><span>{post.price}</span>    
                        </div>
                        <p className='description'>{post.description}</p>
                    </div>
                    <div className='airdrops-img'>
                        <img src={PF + post.cover} className="airdrops-pic" alt='' />
                    </div>
                </Link>
            })}
            </div>

        </div>
    )

}

export default Airdrops
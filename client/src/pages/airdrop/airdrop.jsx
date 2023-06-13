import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Header from "../../components/header/header"
import Error404 from '../../components/Error404/'
import './airdrop.css'



function Airdrop () {
  const params = useParams()
  const id = params.id
  const [product, setProduct] = useState('');

  const PF = "http://localhost:4000/uploads/";

  useEffect(() => {
      
      axios.get(`http://localhost:4000/airdrops/${id}`)
      .then((response) => {setProduct(response.data); });
  }, []);
  
  console.log(product)

  if (!product) return (<Error404 />)

  else 
  return (
    <>
      <Header />
      <div className='item-container'>
        <div className='item-infos'>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <h3>{product.description}</h3>
        </div>

        <div className='item-img'>
          <img src={PF + product.cover} className="item-pic" alt='' />

        </div>

      </div>

    </>
  )
  


}

export default Airdrop
import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import './myPosts.css'



function MyPosts() {
    const PF = "http://localhost:4000/uploads/";
    const params = useParams()
    const [myPosts, setMyPosts] = useState(null);
    const [updatedPost, setUpdatedPost] = useState(
        {   id: "",
            title:"" ,
            description: "",
            price:"" ,
            location:""   });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get('http://localhost:4000').then((response) => {
          setMyPosts(response.data);
        });
      }, []);

      const deletePost = (id) => {
        console.log(id)
        axios.delete(`http://localhost:4000/delete/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        window.location.reload()
      }

      const updatePost = (id, title, description, price, location, category) => {
        setUpdatedPost((prev) => {
            return {
                ...prev,
                id: id,
                title: title,
                description: description,
                price: price,
                location: location,
                category: category
                
            }
        })
        handleShow();
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPost((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };

      const saveUpdatedPost = (id, title, description, price, location) => {

        axios.put(`http://localhost:4000/update/${updatedPost.id}`, updatedPost)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        handleClose();
      window.location.reload()
      }
            
      if (!myPosts) return ("pas d annonce créée");
    
      let userPosts = myPosts.filter((post)=> post.userId===params.id)
      console.log(userPosts)
      return (
        <div className='myPosts-container'>

            <Modal className="modal-container" show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title className='modal-title'>Modifier l'annonce</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form.Control
                        placeholder="titre"
                        name="title"
                        onChange={handleChange}
                        value={updatedPost.title ? updatedPost.title : ""}
                    />
                    <Form.Control
                        placeholder="description"
                        name="description"
                        onChange={handleChange}
                        value={updatedPost.description ? updatedPost.description : ""}
                    />
                    <Form.Control
                        placeholder="prix"
                        name="price"
                        value={updatedPost.price ? updatedPost.price : ""}
                        onChange={handleChange}
                    />
                    <Form.Control
                        placeholder="localité"
                        name="location"
                        value={updatedPost.location ? updatedPost.location : ""}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <Button className ='modal-btn' variant="secondary" onClick={handleClose}> Close</Button>
                    <Button className ='modal-btn' variant="primary" onClick={saveUpdatedPost}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
          <div className='gallery-container'>
          
          {userPosts

            .map((post) => {

              return <div key={post._id} className='gallery-link' >
                        <img src={PF + post.cover} className="gallery-pic" alt='' />
                        <div className="thumb__overlay"></div>
                        <div className={`${post.category==="Vente" ? 'vente': 'location'}`}>{post.category}</div>
                        <div className='gallery-text'>
                          <p>{post.title}</p>
                          <h3>{post.price}</h3>
                        </div>
                        <div className='myPosts-btn-container'>
                          <button className="myPosts-buttons" onClick={() => updatePost(post._id, post.description, post.price)} >Modifier</button>
                          <button className="myPosts-buttons" onClick={() => deletePost(post._id)}>Supprimer</button>
                        </div>
                      </div>
            })}
            </div>

            
    
        </div>   
      )
    
}

export default MyPosts
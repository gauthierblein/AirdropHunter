import axios from 'axios'
import { useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import './myAirdrops.css'



function MyAirdrops() {
    const PF = "http://localhost:4000/uploads/";

    const [myPosts, setMyPosts] = useState(null);
    const [updatedPost, setUpdatedPost] = useState(
        {   title:"" ,
            description: "",
            link:"" ,
            blockchain:"",
            category: "",
            duration:"",
            price:""
             });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get('http://localhost:4000/').then((response) => {
          setMyPosts(response.data);
        });
      }, []);

      const deletePost = (id) => {
        console.log(id)
        axios.delete(`http://localhost:4000/deleteairdrop/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        window.location.reload()
      }

      const updatePost = (_id, title, description, link, blockchain, category, duration, price) => {
        setUpdatedPost((prev) => {
            return {
                ...prev,
                id: _id,
                title: title,
                description: description,
                link: link ,
                blockchain: blockchain,
                category: category,
                duration: duration,
                price: price,
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

      const saveUpdatedPost = () => {    
        axios.put(`http://localhost:4000/update/${updatedPost.id}`, updatedPost)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        handleClose();
        window.location.reload()
      }
            
      if (!myPosts) return ("pas de post créé");
    
      let userPosts = myPosts
      return (
        <div className='myPosts-container'>

            <Modal className="modal-container" show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title className='modal-title'>Modify post</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <Form.Control
                        placeholder="title"
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
                        placeholder="link"
                        name="link"
                        onChange={handleChange}
                        value={updatedPost.link ? updatedPost.link : ""}
                    />
                    <Form.Control
                        placeholder="blockchain"
                        name="blockchain"
                        onChange={handleChange}
                        value={updatedPost.blockchain ? updatedPost.blockchain : ""}
                    />
                    <Form.Control
                        placeholder="category"
                        name="category"
                        onChange={handleChange}
                        value={updatedPost.category ? updatedPost.category : ""}
                    />
                    <Form.Control
                        placeholder="duration"
                        name="duration"
                        onChange={handleChange}
                        value={updatedPost.duration ? updatedPost.duration : ""}
                    />
                    <Form.Control
                        placeholder="price"
                        name="price"
                        onChange={handleChange}
                        value={updatedPost.price ? updatedPost.price : ""}
                    />
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <Button className ='modal-btn' variant="secondary" onClick={handleClose}> Close</Button>
                    <Button className ='modal-btn' variant="primary" onClick={saveUpdatedPost}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

          <div className='gallery-container'>
            {userPosts.map((post) => {

              return <div key={post._id} className='gallery-link' >
                        <div className='gallery-data'>
                          <div className='gallery-text'>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                          </div>
                          <img src={PF + post.cover} className="gallery-pic" alt='' />
                        </div>
                        <div className='myPosts-btn-container'>
                          <button className="myPosts-buttons" onClick={() => updatePost(post._id, post.title, post.description, post.link, post.blockchain, post.category, post.duration, post.price)} >Modify</button>
                          <button className="myPosts-buttons" onClick={() => deletePost(post._id)}>Delete</button>
                        </div>
                      </div>
            })}
            </div>

            
    
        </div>   
      )
    
}

export default MyAirdrops
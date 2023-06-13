import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios";
import './createPost.css'


export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);

  const params = useParams()
    const user = params.id
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user,
      title,
      description,
      link
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.cover = filename;
      try {
        await axios.post('http://localhost:4000/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('http://localhost:4000/create/posts', newPost);
      alert("new post created")
      navigate(`/dashboard/${user}`);
    } catch (err) {}
  };
  return (
    <>
      <h1 className="create-title">Create post</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>

            <label htmlFor="fileInput"></label>
            <input type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])}/>
            
            <input  type="text"
                    placeholder="Title"
                    autoFocus={true}
                    onChange={e=>setTitle(e.target.value)}
            />
            <textarea  name="description"
                    placeholder="Description"
                    rows={8} cols={40}
                    autoFocus={true}
                    onChange={e=>setDescription(e.target.value)}
            />
            <input  type="text"
                    placeholder="Link"
                    autoFocus={true}
                    onChange={e=>setLink(e.target.value)}
            />

            <button className="writeSubmit" type="submit">Publish</button>
        </form>
      </div>
      </>
  );
}
  

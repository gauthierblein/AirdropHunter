import {useState} from "react";
import {Navigate} from "react-router-dom";

import './login.css'

export default function Auth2() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'omit',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setRedirect(true);
      });
    } else {
      alert('identifiants incorrects');
    }
  }

  if (redirect) {
    return <Navigate to={`/dashboard/${username}`} />
  }
  return (

        <div className="login__container">
            <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text"
                    placeholder="username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}/>
            <input type="password"
                    placeholder="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}/>
            <div className="btn-container"><button>Login</button></div>
            </form>
        </div>

  );
}
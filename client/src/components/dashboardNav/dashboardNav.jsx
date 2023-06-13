import { useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import './dashboardNav.css'


const DashboardNav = () => {
    const [nav, setNav] = useState(false);
    const params = useParams()
    const user = params.id
  
    return (
          <div className="header-container">
            <div className="header-left">
              <div className="header-logo">
                <span>airdrops</span><span>hunter</span>
              </div>

              <nav className="header-nav">
                  <Link className="header-link" to={`/dashboard/${user}`}>Publish</Link>
                  <Link className="header-link" to={`/dashboard/${user}/modify`}>Modify & Delete</Link>
                  <Link className="header-link" to="/">Log Out</Link>
              </nav>
            </div>

            <div className="header-right">
              <div className="header-btn">
                <button><Link to="/login">Login</Link></button>
              </div>
              <div className="header-btn2">
                <button><Link to="/createaccount">Create account</Link></button>
              </div>
              <div onClick={() => setNav(!nav)} className="header-icons">
                <FaBars size={30} className='icon'/>
              </div>    
            </div>

            {nav && (
              <div className="header-responsive">
                <nav>
                  <Link className="header-responsive-link" to="/">Home</Link>
                  <Link className="header-responsive-link" to="/airdrops">Aidrops</Link>
                  <Link className="header-responsive-link" to="/calls">Calls</Link>
                </nav>
                <div onClick={() => setNav(!nav)} className='header-responsive-icon'><FaTimes size={30} /></div>
              </div> 
              )}
          </div>

    )
  };

  export default DashboardNav
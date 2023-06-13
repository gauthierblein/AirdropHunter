import { useState } from "react";
import { Link } from 'react-router-dom'
import './header.css'

// Imported icons and images =========>
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { FaBars, FaTimes, FaDiscord } from "react-icons/fa";



const Header = () => {
    const [nav, setNav] = useState(false);
  
    return (
          <div className="header-container">
            <div className="header-left">
              <div className="header-logo">
                <span>airdrops</span><span>hunter</span>
              </div>
              <div className="header-socials">
                <Link to={'https://twitter.com/0xFastLife'}>
                  <FaTwitter size={30} className='social' />
                </Link>
                <FaInstagram size={30} className='social' />
                <FaTelegram size={30} className='social'/>
                <FaDiscord size={30} className='social'/>
              </div>
              <nav className="header-nav">
                <Link className="header-link" to="/">Home</Link>
                <Link className="header-link" to="/airdrops">Airdrops</Link>
                <Link className="header-link" to="/feed">News</Link>
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

  export default Header
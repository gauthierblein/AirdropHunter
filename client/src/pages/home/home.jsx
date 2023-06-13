import { Link } from 'react-router-dom'
import Header from "../../components/header/header"
import  "./home.css"
// ASSETS
import fastPic from "../../assets/8ALfmkzI_4x.jpg"
import fastBanner from "../../assets/banner.jpg"
import parachute from "../../assets/parachute.jpg"
import news from "../../assets/news.jpg"


const Home = () => {

    return (
        <div className="homepage">
            <Header />
            <div className="home-container"> 
                <div className="home-banner"><img src={fastBanner} alt="" /></div>
                <div className='home-content'>
                    <div className="home-left">
                        <Link to={'https://twitter.com/0xFastLife'} className="fast-pic">
                            <img src={fastPic} alt="" />
                        </Link>
                        <div className="fast-infos">
                            <h2>FastLife</h2>
                            <p>Web 3 influencer</p>   
                            <Link to={'https://twitter.com/0xFastLife'} className="fast-infos-link">Check my Twitter account</Link>
                        </div>
                    </div>

                    <div className="home-right">
                        <Link to="/airdrops" className="sections">
                            <img src={parachute} alt="" />
                            <h2>Take a look at the latest airdrops</h2>
                        </Link>
                        <Link to="/feed" className="sections">
                            <img src={news} alt="" />
                            <h2>Don't miss the latest news</h2>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home
import MyPosts from '../../components/myPosts/myPosts'
import DashboardNav from '../../components/dashboardNav/dashboardNav'
import MyAirdrops from '../../components/myAirdrops/myAirdrops'
import Loader from '../../components/loader/loader'
import './modify.css'
import { useEffect, useState } from 'react'


const Modify = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false);}, 1000);
    }, []);
    
    if (loading)  return (<Loader />);
    return (
        <div className="container">
            {loading ? (<Loader />) : (
            <>
                <DashboardNav />
                <div className="modify-container">
                    <div className="modify-left">
                        <h1 className='modify-title'>Airdrops</h1>
                        <MyAirdrops />
                    </div>      
                    <div className="modify-right">
                        <h1 className='modify-title'>Posts</h1>
                        <MyPosts />
                    </div>
                </div>
            </>
            )}
        </div>
    )

}

export default Modify
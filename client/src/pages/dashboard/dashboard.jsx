import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import  "./dashboard.css"
import DashboardNav from '../../components/dashboardNav/dashboardNav'
import CreatePost from "../../components/createPost/createPost"
import CreateAirdrop from "../../components/createAirdrop/createAirdrop"

const Dashboard = () => {
    const params = useParams()
    const user = params.id

    return (
        <div className="container">
            <DashboardNav />
            <div className="dashboard-container">
                <div className="dashboard-left"><CreateAirdrop /></div>
                <div className="dashboard-left"><CreatePost /></div>
            </div>

        </div>
    )

}

export default Dashboard
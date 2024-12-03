import { useNavigate } from "react-router-dom"          // allows buttons to navigate

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Hi I'm Churchill B. Capagngan</h1>
            <button onClick={() => navigate('/')}> Back to App </button> 
        </div>
    )
}

export default Dashboard
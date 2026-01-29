import DueCard from "../Components/UI/DueCard"
import Greeting from "../Components/UI/Greeting"
import StatsGrid from "../Components/UI/StatsGrid"
import TopBar from "../Components/UI/TopBar"; 

function Dashboard() {

    return (
        <>
            <TopBar title="Dashboard" />
            <Greeting />
            <StatsGrid />
            <DueCard />
        </>
    )
}

export default Dashboard
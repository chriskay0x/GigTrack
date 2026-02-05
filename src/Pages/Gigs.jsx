import { useState } from "react"
import TopBar from "../Components/UI/TopBar"
import GigColumn from "../Components/Features/GigsCols/GigColumn";
import GigsContext from "../Components/Context/GigsContext";
import ColumnContext from "../Components/Context/ColumnContext";

function Gigs () {
    const [gigs] = useState([
        { id: 1, name: "E-commerce Redesign", client: "Alpha Corp", deadline: "04/10/2024", budget: "$12,450", status: "Active" },
        { id: 2, name: "SEO Optimization", client: "Beta Ltd", deadline: "04/10/2024", budget: "$3,200", status: "Paid" },
        { id: 3, name: "Mobile App MVP", client: "Gamma Inc", deadline: "08/10/2024", budget: "$3,000", status: "Pending" },
        { id: 4, name: "Marketing Landing", client: "Delta Co", deadline: "08/19/2024", budget: "$3,000", status: "Paid" },
        { id: 5, name: "Dashboard UI", client: "Epsilon LLC", deadline: "08/12/2024", budget: "$3,000", status: "Active" },
        { id: 6, name: "Analytics Dashboard", client: "Zeta Group", deadline: "08/25/2024", budget: "$4,500", status: "Pending" },
    ]);

    const columns = [
        {
            title: "To Do",
            statuses: "Pending",
        },
        {
            title: "In Progress",
            statuses: "Active",
        },
        {
            title: "Completed",
            statuses: "Paid",
        }
    ];
    

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <TopBar title="Gigs" />

            <GigsContext.Provider value={{ gigs }}>
                <div className="flex flex-col md:flex-row gap-6">
                    {columns.map((column, index) => (
                        <ColumnContext.Provider value={{ column }} key={index}>                                 
                            <GigColumn />
                        </ColumnContext.Provider>
                    ))}
                </div>
            </GigsContext.Provider>
        </div>
    )
}

export default Gigs
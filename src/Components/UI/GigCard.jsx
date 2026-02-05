import { useContext } from "react";
import GigsContext from "../Context/GigsContext";
import ColumnContext from "../Context/ColumnContext";
import StatusBadge from "../Features/StatusBadge";
import ProgressBar from "./ProgressBar";

function GigCard () {
    
    const { gigs } = useContext(GigsContext);

    const { column } = useContext(ColumnContext);
    
    if (!gigs) return <div>Loading...</div>;

    const filteredGigs = gigs.filter((gig) => (
        column.statuses.includes(gig.status)
    ));

    const getProgress = (status) => {
        const progressMap = {
            "Pending": 0,
            "Blocked": 25,
            "Active": 50,
            "Review": 75,
            "Paid": 100,
            "Done": 100
        };
        return progressMap[status] || 0;
    };

    return (
        <div className="space-y-4"> 
            {filteredGigs.map((gig) => (
                <div key={gig.id} className="p-4 border border-slate-700 rounded-lg bg-slate-900/5">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">{gig.name}</h3>
                        <StatusBadge status={gig.status} />
                    </div>
                    
                    <div className="text-sm text-slate-400 mb-3 space-y-1">
                        <p>Client: <span className="text-slate-200">{gig.client}</span></p>
                        <p>Deadline: <span className="text-slate-200">{gig.deadline}</span></p>
                    </div>

                    <ProgressBar progress={getProgress(gig.status)} />
                </div>
            ))}
            
            {filteredGigs.length === 0 && (
                <p className="text-slate-500 text-center">No active gigs found.</p>
            )}
        </div>
    )
}

export default GigCard;
import { useContext } from "react";
import GigCard from "../../UI/GigCard";
import { MoreVertical } from "lucide-react";
import ColumnContext from "../../Context/ColumnContext";


function GigColumn () {

    const { column } = useContext(ColumnContext);

    return (
        <div className="w-full md:w-1/3 px-2 flex flex-col gap-6 bg-slate-700/20 px-4 rounded-lg py-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{column.title}</h2>
                <button className="text-slate-500 hover:text-white transition-colors cursor-pointer ">
                    <MoreVertical size={20} />
                </button>
            </div>
            
            <GigCard />
        </div>
    )
}

export default GigColumn;
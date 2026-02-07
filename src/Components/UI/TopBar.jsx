import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import Christian from "../../assets/Christian.jpg"

const TopBar = ({ title }) => {
  const currentUser = {
    id: "user_1",
    name: "Christian"
  }

  return (
    <div className="flex justify-between items-center mb-8">
      {/* 1. Dynamic Page Title */}
      <h1 className="text-2xl font-bold text-white tracking-tight">{title}</h1>

      {/* 2. Global Actions (Notification + Profile) */}
      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:text-white transition-colors relative cursor-pointer">
          <Bell size={20} />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-slate-900"></span>
        </button>
        

        <Link to={`/profile/${currentUser.id}`}>
          <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-slate-700">
            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-sky-500 to-indigo-500 p-px`">
              <img 
                src={Christian} 
                alt="Chris Pic" 
                className="w-full h-full rounded-full object-cover border-2 border-slate-900" 
              />
            </div>
            {/* Hide name on mobile, show on desktop */}
            <span className="hidden md:block text-sm font-medium text-slate-200">
              {currentUser.name}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
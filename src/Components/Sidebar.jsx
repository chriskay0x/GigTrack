import { NavLink } from "react-router-dom";
import { LayoutGrid, Briefcase, Settings, LogOut, Wallet, Sparkles } from "lucide-react";
import logo from "../assets/GigTrack-Logo.png";

function Sidebar () {
    const navLinks = [
        { name: "Dashboard", path: "/", icon: LayoutGrid },
        { name: "Projects", path: "/projects", icon: Briefcase },
        { name: "Gigs", path: "/gigs", icon: Sparkles },
        { name: "Looks", path: "/looks", icon: Wallet },
        { name: "Settings", path: "/settings", icon: Settings },
    ];

    function handleClick () {
        console.log("Im logged out..");
    }

    return (
        <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col 
        fixed left-0 top-0 z-50">
            {/* GigTrack Logo */}
            <div className="p-6 flex items-center gap-3">
                <img src={logo} alt="GigTrack Logo" className="w-auto h-8" />
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 mt-6 space-y-2">
                {navLinks.map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                        isActive
                        ? "bg-sky-500/10 text-sky-400 border border-sky-500/10" // Active State
                        : "text-slate-400 hover:text-white hover:bg-slate-800"  // Inactive State
                    }`
                    }
                >
                    {/* Render the Icon component passed in the object */}
                    <link.icon size={20} />
                    {link.name}
                </NavLink>
                ))}
            </nav>

            {/* 3. PROFILE ZONE */}
            <div className="p-4 border-t border-slate-800">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-sky-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                        JD
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-white group-hover:text-sky-400 transition-colors">
                        John Doe
                        </p>
                        <p className="text-xs text-slate-500">Freelancer</p>
                    </div>
                    <LogOut size={18} className="text-slate-500 hover:text-white" onClick={handleClick} />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
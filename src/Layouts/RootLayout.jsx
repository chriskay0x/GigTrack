import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";


function RootLayout () {
    return (
        <div className="flex min-h-screen bg-navy-900">
            {/* Sidebar is fixed width */}
            <Sidebar />
            
            {/* Main Content Area */}
            {/* ml-64 pushes content over to match sidebar width */}
            <main className="flex-1 ml-64 p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                {/* The <Outlet /> renders the specific page (Dashboard or Projects) */}
                <Outlet />
                </div>
            </main>
        </div>
    );
}

export default RootLayout
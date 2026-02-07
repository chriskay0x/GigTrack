import TopBar from "../Components/UI/TopBar";
import Christian from "../assets/Christian.jpg"

function UserProfile () {

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <TopBar title="My Profile" />

            <div className="flex justify-center items-center">
                <div className="flex items-center -space-x-2">
                    <img
                    src={Christian}
                    alt="Christian Picture"
                    className="w-80 h-80 rounded-full border-2 border-slate-800 object-cover"
                    />
                </div>

                {/* Deadline Text (Red/Rose color) */}
                <span className="text-sm font-medium text-rose-400">

                </span>
            </div>
        </div>
    )
}

export default UserProfile;
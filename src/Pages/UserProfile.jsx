import TopBar from "../Components/UI/TopBar";
import Christian from "../assets/Christian.jpg"

function UserProfile () {
    const name = "Christian Kalu";

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <TopBar title="My Profile" />

            <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex items-center -space-x-2">
                    <img
                    src={Christian}
                    alt="Christian Picture"
                    className="w-80 h-80 rounded-full border-2 border-slate-800 object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center items-center gap">
                    <h3 className="text-2xl font-bold text-white">{name}</h3>
                    <span className="text-slate-400">Web Developer</span>
                </div>

                <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded transition-colors">
                    Edit Profile
                </button>
            </div>
        </div>
    )
}

export default UserProfile;
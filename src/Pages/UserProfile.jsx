import { useState } from "react";
import TopBar from "../Components/UI/TopBar";
import Christian from "../assets/Christian.jpg"
import EditProfileModal from "../Components/Features/ModalComponents/EditProfileModal";
import { Edit2 } from "lucide-react";

function UserProfile () {
    const [user, setUser] = useState({
        name: "Christian",
        role: "Web Developer",
        avatar: Christian
    });

    const [isEditOpen, setIsEditOpen] = useState(false);

    const handleSaveProfile = (data) => {
        // 1. Update the UI immediately
        setUser((prev) => ({
            ...prev,
            name: data.name,
            avatar: data.avatar, // Uses the blob URL for instant feedback
        }));

        // 2. Check if there is a file to upload to a server
        if (data.file) {
            console.log("Uploading file to server:", data.file.name);
            // Here you would typically do: const formData = new FormData(); ...
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <TopBar title="My Profile" />

            <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex items-center -space-x-2">
                    <img
                    src={user.avatar}
                    alt="Christian Picture"
                    className="w-80 h-80 rounded-full border-2 border-slate-800 object-cover"
                    />`     `
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">{user.name}</h3>
                    <span className="text-slate-400">{user.role}</span>
                </div>

                <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded transition-colors flex items-center gap-2 border border-slate-700 cursor-pointer"
                    onClick={() => setIsEditOpen(true)}
                >
                    <Edit2 size={16} />
                    Edit Profile
                </button>
            </div>

            <EditProfileModal 
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                currentUser={user} // Pass current data so the form isn't empty!
                onSave={handleSaveProfile}
            />
        </div>
    )
}

export default UserProfile;
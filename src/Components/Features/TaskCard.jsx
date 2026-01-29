import { MoreVertical } from "lucide-react";

function TaskCard ({ title, deadline, icon, theme, members }) {

    const styles = {
        blue: {
        iconBox: "bg-blue-500/20 text-blue-400",
        iconBg: "group-hover:bg-blue-500/30", // Subtle hover effect
        },
        rose: {
        iconBox: "bg-rose-500/20 text-rose-400",
        iconBg: "group-hover:bg-rose-500/30",
        },
        silver: {
        // Slate-500 provides that metallic gray look
        iconBox: "bg-slate-500/20 text-slate-300", 
        iconBg: "group-hover:bg-slate-500/30",
        },
    };
    const currentStyle = styles[theme] || styles.blue;
    const Icon = icon;

    return (
        <div className="glass-card p-6 flex flex-col bg-slate-500/20 justify-between h-48 group hover:bg-slate-800/60 transition-colors cursor-pointer relative">
            <div className="flex justify-between items-start">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${currentStyle.iconBox} ${currentStyle.iconBg}`}>
                <Icon size={24} />
                </div>
                <button className="text-slate-500 hover:text-white transition-colors cursor-pointer ">
                <MoreVertical size={20} />
                </button>
            </div>

            {/* Middle: Title */}
            <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>

            {/* Bottom Row: Avatars + Deadline */}
            <div className="flex justify-between items-end">
                {/* Overlapping Avatars */}
                <div className="flex items-center -space-x-2">
                {members.map((src, i) => (
                    <img
                    key={i}
                    src={src}
                    alt="Member"
                    className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover"
                    />
                ))}
                </div>

                {/* Deadline Text (Red/Rose color) */}
                <span className="text-sm font-medium text-rose-400">
                {deadline}
                </span>
            </div>
            </div>
    )
}

export default TaskCard

function StatCard ({ title, value, icon, color }) {
    const colorStyles = {
        emerald: {
        card: "bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40",
        iconBox: "bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
        text: "text-emerald-100",
        },
        amber: {
        card: "bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20 hover:border-amber-500/40",
        iconBox: "bg-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
        text: "text-amber-100",
        },
        blue: {
        card: "bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:border-blue-500/40",
        iconBox: "bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        text: "text-blue-100",
        },
    };

    const LucideIcon = icon;
    if (!LucideIcon) return null;

    const theme = colorStyles[color];

    return (
        <div
            className={`
                relative overflow-hidden rounded-3xl p-8 border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 
                flex flex-col items-center justify-center text-center gap-4 group
                ${theme.card}
            `}
            >
            {/* The Glow Effect Background */}
            <div className={`absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none radial-gradient`} />

            {/* Icon Container */}
            <div
                className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110
                ${theme.iconBox}
                `}
            >
                <LucideIcon size={32} strokeWidth={2.5} />
            </div>

            {/* Text Content */}
            <div className="space-y-1">
                <p className="text-slate-400 font-medium text-sm tracking-wide uppercase">
                {title}
                </p>
                <h3 className={`text-4xl font-bold tracking-tight text-white drop-shadow-sm`}>
                {value}
                </h3>
            </div>
        </div>
    )
}

export default StatCard
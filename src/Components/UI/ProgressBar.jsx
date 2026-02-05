
function ProgressBar({ progress = 0 }) {
    const pct = Math.max(0, Math.min(100, Math.round(progress)));

    return (
        <div className="mt-3">
            <div
                className="w-full h-2 bg-slate-700/20 rounded overflow-hidden"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={pct}
            >
                <div
                    className="h-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${pct}%` }}
                />
            </div>
            <div className="text-sm text-slate-400 mt-1">{pct}%</div>
        </div>
    );
}

export default ProgressBar;

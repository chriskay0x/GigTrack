
const ModalInput = ({ label, icon: Icon, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-slate-400 mb-1">{label}</label>
        <div className="relative">
        <input
            className={`glass-input w-full ${Icon ? "pl-10" : ""}`} 
            {...props} 
        />
        {Icon && (
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
        )}
        </div>
    </div>
);

export default ModalInput
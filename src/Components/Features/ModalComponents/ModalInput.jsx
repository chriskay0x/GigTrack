
const ModalInput = ({ label, icon: Icon, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">{label}</label>
        <div className="relative">
        <input
            className={`glass-input w-full ${Icon ? "pl-10" : ""} border-slate-600/50 border text-slate-200 
            focus:border-sky-500 focus:ring-sky-500 py-1 px-2`} 
            {...props} 
        />
        {Icon && (
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
        )}
        </div>
    </div>
);

export default ModalInput
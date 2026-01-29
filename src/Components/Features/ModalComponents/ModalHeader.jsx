import { X } from "lucide-react";

const ModalHeader = ({ title, onClose }) => (
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
        </button>
    </div>
);

export default ModalHeader
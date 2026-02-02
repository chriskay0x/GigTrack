import { useState } from "react";
import { Calendar } from "lucide-react";
import ModalInput from "../ModalComponents/ModalInput";
import ModalHeader from "../ModalComponents/ModalHeader";
import ModalOverlay from "../ModalComponents/ModalOverlay";

function AddProjectModal ({ isOpen, onClose, onAdd }) {
    const [form, setForm] = useState({
        name: "", client: "", deadline: "", budget: "", status: "Active"
    });

    // Generic Change Handler (One function to rule them all)
    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ ...form, id: Date.now() });
        onClose();
        setForm({ name: "", client: "", deadline: "", budget: "", status: "Active" });
    };

    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose}>
        
            <ModalHeader title="New Gig" onClose={onClose} />

            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* The Clean Inputs using Props */}
                <ModalInput 
                    label="Project Name" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                />

                <ModalInput 
                    label="Client" 
                    name="client" 
                    value={form.client} 
                    onChange={handleChange} 
                    required 
                />

                <div className="grid grid-cols-2 gap-4">
                    <ModalInput 
                        label="Deadline" 
                        name="deadline" 
                        type="date" 
                        icon={Calendar} 
                        value={form.deadline} 
                        onChange={handleChange} 
                        required 
                    />
                    
                    <ModalInput 
                        label="Budget ($)" 
                        name="budget" 
                        type="number" 
                        placeholder="1500" 
                        value={form.budget} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                {/* Status Dropdown (Still manual because it's unique) */}
                <div>
                    <label className="block text-sm font-medium text-slate-200 mb-1">Status</label>
                    <select 
                        name="status" 
                        value={form.status} 
                        onChange={handleChange}
                        className="glass-input w-full border-slate-600/50 border text-slate-200 focus:border-sky-500 focus:ring-sky-500 py-1 px-2"
                    >
                        {["Active", "Pending", "Paid"].map(s => (
                        <option key={s} value={s} className="bg-navy-900 ">{s}</option>
                        ))}
                    </select>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4">
                    <button type="submit" className="btn-primary cursor-pointer bg-sky-600 hover:bg-sky-500 text-white px-6 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 active:scale-95">
                        Create Project
                    </button>
                </div>

            </form>
        </ModalOverlay>
    );
}

export default AddProjectModal
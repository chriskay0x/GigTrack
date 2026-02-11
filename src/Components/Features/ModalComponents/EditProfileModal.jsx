import { useState, useRef } from "react";
import { Camera } from "lucide-react";
import ModalOverlay from "./ModalOverlay";
import ModalHeader from "./ModalHeader";
import ModalInput from "./ModalInput";

const EditProfileModal = ({ isOpen, onClose, currentUser, onSave }) => {
  const [name, setName] = useState(currentUser.name);
  const [preview, setPreview] = useState(currentUser.avatar);
  const [selectedFile, setSelectedFile] = useState(null); // <--- We need to use this!

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the file
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl); // Create preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSave({ 
      name: name, 
      avatar: preview, 
      file: selectedFile // <--- Now passing the actual file object
    });

    onClose();
  };

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <ModalHeader title="Edit Profile" onClose={onClose} />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Uploader */}
        <div className="flex flex-col items-center gap-3">
          <div 
            className="relative group cursor-pointer w-24 h-24"
            onClick={() => fileInputRef.current.click()}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-sky-500 transition-colors">
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="text-white" size={24} />
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              className="hidden" 
              accept="image/*"
            />
          </div>
          <span className="text-xs text-slate-400">Click to change photo</span>
        </div>

        {/* Name Input */}
        <ModalInput 
          label="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-white text-sm font-medium cursor-pointer">
            Cancel
          </button>
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded transition-colors border border-slate-700 cursor-pointer">
            Save Changes
          </button>
        </div>
      </form>
    </ModalOverlay>
  );
};

export default EditProfileModal;
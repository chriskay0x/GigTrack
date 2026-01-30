
const ModalOverlay = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/60 backdrop-blur-sm transition-opacity" 
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg p-6 bg-slate-800/30 backdrop-blur-lg border border-slate-600/50 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95" 
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>
  );
};

export default ModalOverlay;

const ModalOverlay = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        >
            <div 
                className="glass-card w-full max-w-lg p-6 animate-in fade-in zoom-in-95" 
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
            >
                {children}
            </div>
        </div>
    );
};

export default ModalOverlay
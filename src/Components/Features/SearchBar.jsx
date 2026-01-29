import { Search, Plus } from "lucide-react";

function SearchBar ({ onSearch, onAddClick, placeholder = "Search..." }) {

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            {/* Search Input Wrapper */}
            <div className="relative w-full sm:max-w-md group">
                <Search 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-400 transition-colors" 
                size={18} 
                />
                <input 
                type="text" 
                placeholder={placeholder} 
                onChange={(e) => onSearch(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 text-white pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 placeholder:text-slate-500 transition-all"
                />
            </div>

            {/* Primary Action Button */}
            <button 
                onClick={onAddClick}
                className="w-full sm:w-auto cursor-pointer bg-sky-600 hover:bg-sky-500 text-white px-6 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-95"
            >
                <Plus size={18} />
                <span>Add Project</span>
            </button>
        </div>
    )
}

export default SearchBar
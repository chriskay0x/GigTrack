import { useState } from "react";
import SearchBar from "../Components/Features/SearchBar"; 
import StatusBadge from "../Components/Features/StatusBadge";
import TopBar from "../Components/UI/TopBar"; 
import AddProjectModal from "../Components/Features/Projects/AddProjectModal";

function ProjectList () {
    const [projects] = useState([
        { id: 1, name: "E-commerce Redesign", client: "Alpha Corp", deadline: "04/10/2024", budget: "$12,450", status: "Active" },
        { id: 2, name: "SEO Optimization", client: "Beta Ltd", deadline: "04/10/2024", budget: "$3,200", status: "Paid" },
        { id: 3, name: "Mobile App MVP", client: "Gamma Inc", deadline: "08/10/2024", budget: "$3,000", status: "Active" },
        { id: 4, name: "Marketing Landing", client: "Delta Co", deadline: "08/19/2024", budget: "$3,000", status: "Paid" },
        { id: 5, name: "Dashboard UI", client: "Epsilon LLC", deadline: "08/12/2024", budget: "$3,000", status: "Active" },
    ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

    // 2. The Logic (Filter based on search)
    const filteredProjects = projects.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <TopBar title="Projects List" />

            {/* B. The Search Component */}
            <SearchBar 
                onSearch={(value) => setSearchTerm(value)} 
                onAddClick={handleModalOpen}
            />

            {/* C. The List (Iterating over filtered data) */}
            <div className="space-y-3">
                {filteredProjects.map((project) => (
                <div 
                    key={project.id} 
                    className="glass-card bg-slate-900/5 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-slate-800/40 transition-colors group cursor-pointer gap-4 sm:gap-0"
                >
                    {/* Column 1: Identity */}
                    <div className="sm:w-1/4">
                    <h3 className="text-white font-medium group-hover:text-sky-400 transition-colors">
                        {project.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{project.client}</p>
                    </div>

                    {/* Column 2: Deadline */}
                    <div className="sm:w-1/4">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Deadline</p>
                    <p className="text-slate-200 text-sm font-medium">{project.deadline}</p>
                    </div>

                    {/* Column 3: Budget */}
                    <div className="sm:w-1/4">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Budget</p>
                    <p className="text-slate-200 text-sm font-medium">{project.budget}</p>
                    </div>

                    {/* Column 4: Status Badge */}
                    <div className="sm:w-1/6 flex justify-start sm:justify-end">
                    <StatusBadge status={project.status} />
                    </div>
                </div>
                ))}

                {/* Empty State Handling */}
                {filteredProjects.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                    No projects found matching "{searchTerm}"
                </div>
                )}
            </div>
            <AddProjectModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} // <--- CLOSES MODAL
                onAdd={handleModalOpen}
            />
        </div>
    );
}

export default ProjectList
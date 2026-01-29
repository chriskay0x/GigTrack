import { CloudDownload, Calendar, FileText } from "lucide-react";
import TaskCard from "../Features/TaskCard"

function DueCard () {
    const tasks = [
        {
            id: 1,
            title: "Mini Project 1",
            deadline: "2 days ago",
            icon: CloudDownload,
            theme: "blue",
            members: [
                "https://media.istockphoto.com/id/1348209421/photo/smiling-business-woman-working-with-laptop-while-looking-at-camera-in-modern-startup-office.jpg?s=612x612&w=0&k=20&c=-YOjhdxdWLjflmpzPyUjtYL80zhbJYqSANk6hhDPXL0=", // Random avatar placeholders
                "https://static.vecteezy.com/system/resources/thumbnails/055/698/776/small/portrait-of-smiling-businessman-with-arms-crossed-in-modern-office-photo.jpg",
            ],
        },
        {
            id: 2,
            title: "Mini Project 2",
            deadline: "2 days ago",
            icon: Calendar,
            theme: "rose",
            members: [
                "https://img.freepik.com/premium-photo/sympathetic-smiling-new-corporate-office-worker-male_616370-2463.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWzN4yr9FZdLfQF0FT8slKzZQJa6xHjHIHA&s",
            ],
        },
        {
            id: 3,
            title: "Invoice #004",
            deadline: "Due Today",
            icon: FileText,
            theme: "silver",
            members: [
                "https://i.pravatar.cc/150?u=8", 
                "https://i.pravatar.cc/150?u=9"
            ],
        },
    ];

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-200 mb-4">Due Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task) => (
                    <TaskCard key={task.id} {...task} />
                ))}
            </div>
        </div>
    )
}

export default DueCard
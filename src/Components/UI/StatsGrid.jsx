import { DollarSign, Hourglass, Hammer } from 'lucide-react';
import StatCard from '../Features/StatCard';

function StatsGrid() {
    const stats = [
        {
        title: "Total Earnings",
        value: "$12,450",
        icon: DollarSign,
        color: "emerald", // Matches the Green Card
        },
        {
        title: "Pending Invoices",
        value: "$3,200",
        icon: Hourglass,
        color: "amber", // Matches the Orange Card
        },
        {
        title: "Active Gigs",
        value: "5",
        icon: Hammer,
        color: "blue", // Matches the Blue Card
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-10">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    )
}

export default StatsGrid
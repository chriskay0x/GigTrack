

const StatusBadge = ({ status }) => {
  const styles = {
    Active: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    Paid: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Overdue: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  };

  // Fallback to 'Active' style if the status isn't found
  const currentStyle = styles[status] || styles.Active;

  return (
    <span
      className={`
        px-4 py-1.5 rounded-full text-xs font-semibold border 
        ${currentStyle}
        shadow-sm backdrop-blur-md
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
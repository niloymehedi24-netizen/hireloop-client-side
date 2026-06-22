export default function StatusBadge({ status }) {
  const styles = {
    approved: "bg-green-500/15 text-green-400",

    pending: "bg-yellow-500/15 text-yellow-400",

    rejected: "bg-red-500/15 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}

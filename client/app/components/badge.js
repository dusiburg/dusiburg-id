export default function Badge({ children, type }) {
  const backgroundColor = type == "success" ? "bg-green-500/10" : type == "info" ? "bg-sky-600/10" : "bg-zinc-700/80";
  const textColor = type == "success" ? "text-green-500" : type == "info" ? "text-sky-400" : "";

  return (
    <div className={`px-2 py-0.5 text-xs rounded-full select-none ${backgroundColor} ${textColor}`}>
      {children}
    </div>
  );
}
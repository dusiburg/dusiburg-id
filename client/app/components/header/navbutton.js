export default function NavButton({ children, href, type = "primary", onClick, target="" }) {
  if (type != "mobile") {
    return (
      <a className={`px-3 py-1.5 rounded-lg duration-200 hover:cursor-pointer ${type === "primary" ? "hover:bg-gray-100 dark:hover:bg-zinc-800" : "text-teal-500 hover:bg-teal-600/10"}`} href={href} target={target !== "" ? "_blank" : ""} onClick={onClick}>
        <div className="flex flex-row items-center gap-3 text-base">
          {children}
        </div>
      </a>
    );
  } else {
    return (
      <a className="w-full px-4 py-3 rounded-lg duration-200 hover:cursor-pointer hover:bg-zinc-600/20 hover:ring-2 hover:ring-inset hover:ring-zinc-700/75" href={href} target={target !== "" ? "_blank" : ""} onClick={onClick}>
        <div className="flex flex-row items-center gap-3 text-base">
          {children}
        </div>
      </a>
    );
  }
}
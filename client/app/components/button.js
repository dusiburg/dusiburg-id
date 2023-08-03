import Link from "next/link";

export default function Button({ children, type, href, onClick }) {
  if (href) {
    return (
      <Link href={href} className={`flex justify-center items-center w-full px-4 py-2.5 rounded-lg duration-200 select-none ${type == "primary" ? "bg-sky-700 hover:bg-sky-600" : "bg-zinc-800/60 hover:bg-zinc-800/80"} hover:cursor-pointer`}>
        <h4 className={`flex flex-row items-center text-lg ${type == "danger" ? "text-red-400" : type == "primary" ? "text-white" : ""}`}>{children}</h4>
      </Link>
    );
  }

  return (
    <div className={`flex justify-center items-center w-full px-4 py-2.5 rounded-lg duration-200 select-none ${type == "primary" ? "bg-sky-700 hover:bg-sky-600" : "bg-zinc-800/60 hover:bg-zinc-800/80"} hover:cursor-pointer`} onClick={onClick}>
      <h4 className={`flex flex-row items-center text-lg ${type == "danger" ? "text-red-400" : type == "primary" ? "text-white" : ""}`}>{children}</h4>
    </div>
  );
}
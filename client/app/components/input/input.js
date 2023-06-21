export default function Input({ type = "text", value = "", placeholder = "", onChange }) {
  return (
    <>
      <input type={type} className="px-4 py-2.5 rounded-xl focus:outline-none placeholder:text-neutral-600 bg-zinc-800" placeholder={placeholder} value={value} onChange={onChange}/>
    </>
  );
}
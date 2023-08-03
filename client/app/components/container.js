export default function Container({ children }) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full lg:w-4/5 py-5 rounded-xl bg-zinc-800/60">
        { children }
      </div>
    </>
  );
}
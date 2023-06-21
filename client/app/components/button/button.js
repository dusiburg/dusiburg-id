export default function Button({ value = "Далее", onClick }) {
  return (
    <>
      <div className="px-4 py-3 rounded-lg text-center select-none duration-200 hover:cursor-pointer bg-zinc-800 hover:bg-zinc-800/80" onClick={onClick}>
        {value}
      </div>
    </>
  );
}
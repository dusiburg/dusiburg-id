export default function Center({ children }) {
  return (
    <>
      <div className="absolute flex justify-center items-center w-full h-full">
        <div className="container flex flex-col w-max px-6 mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
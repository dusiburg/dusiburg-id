export default function Main({ children }) {
  return (
    <>
      <div className="mt-24 mb-12">
        <div className="container px-6 mx-auto grid h-full place-items-center">
          {children}
        </div>
      </div>
    </>
  );
}
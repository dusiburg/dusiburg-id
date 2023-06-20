import Header from "@/components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-96 bg-black/20">
        <div className="flex flex-row gap-2 text-xl text-center">Дусибурская Республика - государство для всех</div>
        {/* <div className="absolute w-3/5 h-1/3 -z-10">
          <div className="absolute top-0 w-24 h-24 rounded-full bg-blue-500/50 blur-xl"></div>
          <div className="absolute top-12 left-12 w-24 h-24 rounded-full bg-teal-400/50 blur-xl"></div>
          <div className="absolute top-24 left-24 w-24 h-24 rounded-full bg-sky-400/40 blur-xl"></div>
        </div> */}
      </div>
    </>
  );
}
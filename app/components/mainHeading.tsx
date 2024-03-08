export default function MainHeading() {
  return (
    <div className="flex flex-col items-center justify-center  bg-transparent m-4 mt-6">
      <h1 className="text-4xl text-center text-slate-100 mb-3">
        Welcome to
        <span className="text-4xl text-center p-1 mx-1 rounded-lg text-blue-500 bg-[color:var(--accent)]">
          Bytterfly
        </span>
      </h1>
      <h3 className="text-md text-slate-100 text-center">
        A place where you can improve your writing skills
      </h3>
      {/* horizontal line */}
      <div className="w-5/6 h-1 bg-[color:var(--accent)] mt-4 mb-4"></div>
    </div>
  );
}

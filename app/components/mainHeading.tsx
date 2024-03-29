export default function MainHeading() {
  return (
    <div className="flex flex-col items-center justify-center  bg-transparent m-4 mt-6">
      <h1
        className="text-4xl text-center text-[color:var(--text-light)]
     mb-2"
      >
        Welcome to
      </h1>
      <div
        className="text-4xl text-center p-1 mx-1 rounded-lg text-[color:var(--accent-secondary)]
         bg-[color:var(--accent)] mb-3"
      >
        Bytterfly
      </div>

      <h3 className="text-md  text-[color:var(--text-light)] text-center">
        A place where you can improve your writing skills
      </h3>
    </div>
  );
}

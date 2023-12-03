export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-pink-700 text-white">
      <div className="max-w-[1280px] flex flex-col gap-2 mx-auto py-5">
        <h2>
          <span className="font-bold text-xl title">Blog</span>
          <span className="text-zinc-300 font-medium">.tiagohll</span>
        </h2>{" "}
        <div className="relative">
          <input
            className="bg-transparent rounded-md bg-gradient-to-r from-pink-700/10 to-indigo-700/10 w-full outline-none border p-2 pl-11 placeholder-zinc-300 focus:border-purple-400/60"
            placeholder="Pesquisar no blog"
            type="text"
          />
          <span className="material-symbols-outlined absolute top-[8px] left-3 select-none cursor-text">
            search
          </span>
        </div>
      </div>
    </header>
  );
}

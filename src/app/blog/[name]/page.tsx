import Header from "@/components/Header";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Header />
      <main className="max-w-[1280px] mx-auto">
        <>
          <Link
            href="/"
            className="text-sm flex my-2 items-center select-none text-zinc-600 hover:text-zinc-900 gap-2 duration-200"
          >
            <span className="material-symbols-rounded text-base">
              arrow_back_ios_new
            </span>
            <span>Voltar para o blog</span>
          </Link>
          <h1 className="title font-bold text-2xl">Blog name</h1>
          <span className="text-sm mb-2">00/00/00 00:00</span>
        </>
        <></> {/* content */}
      </main>
    </>
  );
}

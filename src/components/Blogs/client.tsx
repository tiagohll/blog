"use client";

import Link from "next/link";

export default function BlogsClient() {
  return (
    <div className="flex flex-col gap-3 my-2">
      <h1 className="title font-bold text-2xl">Blogs</h1>
      <div className="bg-zinc-300 p-2 rounded-md flex hover:border-b-8 hover:border-l-8 duration-200">
        <Link href="/blog/name/" className="flex flex-col w-full">
          <span className="title font-semibold text-xl text-zinc-800 hover:underline">
            Lorem ipsum is nice
          </span>
          <p className="font-medium text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            necessitatibus exercitationem assumenda excepturi doloribus eius
            corrupti, nulla laborum. Sunt commodi necessitatibus perspiciatis
            aut, quidem optio velit enim esse error deserunt!
          </p>
        </Link>
        <div className="flex flex-col">
          <button>
            <span className="material-symbols-rounded hover:text-yellow-600">
              star
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

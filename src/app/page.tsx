import BlogsClient from "@/components/Blogs/client";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1280px] mx-auto">
        <BlogsClient />
      </main>
    </>
  );
}

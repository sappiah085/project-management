import Button from "@/components/button/button";
import LayoutAdmin from "@/components/layoutAdmin/layoutAdmin";
import NewsCard from "@/components/newsCard/newsCard";
import TabLike from "@/components/tabLike/tabLike";
import Head from "next/head";
import { useState } from "react";

export default function NewsLetter() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Head>
        <title>Newsletters</title>
      </Head>
      <LayoutAdmin>
        <section className="flex font-gilroy p-5 w-full flex-col gap-2">
          <h1 className="text-xl font-bold">Newsletters</h1>
          <div className="w-full z-20 sticky top-14 bg-white py-2 flex gap-5">
            {["Publish", "Draft"].map((tab, id) => (
              <TabLike
                active={id === active}
                label={tab}
                key={tab}
                handleClick={() => setActive(id)}
              />
            ))}
          </div>
          <span className="fixed z-30  top-28 right-4">
            <Button
              link="/admin/newsletters/post-letter"
              label="New Post"
              className="bg-[#582be8] after:bg-[#582be8]"
            >
              <span></span>
            </Button>
          </span>
          <div className="w-full flex flex-col gap-4">
            {[1, 2, 3, 4, 5, 6, 7].map((news) => (
              <NewsCard key={news} />
            ))}
          </div>
        </section>
      </LayoutAdmin>
    </>
  );
}

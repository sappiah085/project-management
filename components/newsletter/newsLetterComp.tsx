import NewsLetterCard from "./newsLetterCard";

export default function NewsLetter({
  news,
}: {
  news: { message: string; image: any; link: string }[];
}) {
  return (
    <>
      {news.map((el, id) => (
        <NewsLetterCard {...el} id={id} key={id} />
      ))}
    </>
  );
}

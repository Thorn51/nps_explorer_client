import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NewsRelease from "../NewsRelease/NewsRelease";

export default function NewsReleaseList() {
  const { news, getNews } = GlobalContext(useContext);

  useEffect(() => {
    getNews();
  }, []);

  console.log(news);

  return (
    <section className="nps_news">
      {news.map(release => (
        <NewsRelease
          key={release.id}
          title={release.title}
          date={release.releasedate}
          content={release.abstract}
          url={release.url}
        />
      ))}
    </section>
  );
}

import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NewsRelease from "../NewsRelease/NewsRelease";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./NewsReleaseList.css";

export default function NewsReleaseList() {
  const { news, getNews } = useContext(GlobalContext);
  // Get news
  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return news.length === 0 ? (
    <div className="loader">
      <h3 className="section_title">Fetching National Park Service News</h3>
      <div className="loader_animation">
        <PropagateLoader />
      </div>
    </div>
  ) : (
    <section className="nps_news">
      <h3 className="news_header">National Park Service News</h3>
      {news[0].map(release => (
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

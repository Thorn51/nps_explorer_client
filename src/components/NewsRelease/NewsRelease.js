import React from "react";
import "./NewsRelease.css";

export default function NewsRelease(props) {
  return (
    <div className="news_release">
      <h3 className="nr_heading">{props.title}</h3>
      <h3 className="nr_heading">{props.date}</h3>
      <p className="pr_content">{props.content}</p>
      <a className="pr_more_info" href={props.url}>
        More Info
      </a>
    </div>
  );
}

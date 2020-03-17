import React from "react";
import "./NewsRelease.css";

export default function NewsRelease(props) {
  return (
    <div className="news_release">
      <div className="pr_title_container">
        <h3 className="pr_heading">{props.title}</h3>
      </div>
      <p className="pr_release_date">
        <span className="bold">Release Date: </span>
        {props.date}
      </p>
      <p className="pr_content">{props.content}</p>
      <a className="pr_more_info" href={props.url} target="_blank">
        More Info
      </a>
    </div>
  );
}

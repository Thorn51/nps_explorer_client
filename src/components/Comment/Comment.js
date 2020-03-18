import React from "react";
import moment from "moment";
import "./Comment.css";

export default function Comment(props) {
  return (
    <div className="comment">
      <div className="comment_header">
        <p className="author">{props.author}</p>
        <p className="submit_date">
          {moment(props.date).format("MMM Do YYYY")}
        </p>
      </div>
      <p className="comment_text">{props.comment}</p>
    </div>
  );
}

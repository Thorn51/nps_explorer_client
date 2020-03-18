import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function CommentForm(props) {
  const { postComment } = useContext(GlobalContext);

  const [comment, setComment] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    let newComment = {
      comment,
      author: "Author",
      dateSubmitted: Date.now().toString(),
      parkCode: props.parkCode
    };
    postComment(newComment);
    setComment("");
  };

  return (
    <form className="comment_form" onSubmit={onSubmit}>
      <p>You are required to be logged in to submit comments.</p>
      <hr />
      <label htmlFor="comment">Leave your thoughts for {props.parkName}</label>
      <textarea
        name="comment"
        cols="30"
        rows="15"
        className="comment"
        id="comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      ></textarea>
      <button type="submit" className="form_button">
        Submit
      </button>
    </form>
  );
}

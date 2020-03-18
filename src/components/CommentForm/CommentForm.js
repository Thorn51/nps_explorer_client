import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import moment from "moment";

export default function CommentForm(props) {
  const { postComment, comments } = useContext(GlobalContext);

  const [comment, setComment] = useState("");

  let id = comments.length === 0 ? 0 : comments[comments.length - 1].id + 1;

  const onSubmit = e => {
    e.preventDefault();
    let newComment = {
      id,
      comment,
      author: "Author Name",
      dateSubmitted: moment(),
      parkCode: props.parkCode
    };
    postComment(newComment);
    setComment("");
  };

  return (
    <form className="comment_form" onSubmit={onSubmit}>
      <label htmlFor="comment">
        Did you visit? What did you think of {props.parkName}?
      </label>
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
      <hr />
      <p>You are required to be logged in to submit comments.</p>
    </form>
  );
}

import React, { useContext } from "react";
import GlobalState from "../../context/GlobalState";

export default function CommentForm(props) {
  return (
    <form className="comment_form">
      <p>You are required to be logged in to submit comments.</p>
      <hr />
      <label htmlFor="comment">Leave your thoughts for {props.parkName}</label>
      <textarea
        name="comment"
        cols="30"
        rows="15"
        className="comment"
        id="comment"
      ></textarea>
      <button type="submit" className="form_button">
        Submit
      </button>
    </form>
  );
}

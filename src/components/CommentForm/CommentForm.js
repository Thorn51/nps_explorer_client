import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import TokenServices from "../../services/token-service";

export default function CommentForm(props) {
  const { postComment } = useContext(GlobalContext);

  const [comment, setComment] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    let newComment = {
      author: "Author Name",
      parkCode: props.parkCode
    };
    postComment(newComment);
    setComment("");
  };

  const renderFormLoggedIn = () => {
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
        <button
          title="You need to log in to submit comments."
          type="submit"
          className="form_button"
        >
          Submit
        </button>
      </form>
    );
  };

  const renderDisabledForm = () => {
    return (
      <form className="comment_form">
        <label htmlFor="comment">
          Did you visit {props.parkName}? Log in to submit your thoughts.
        </label>
        <textarea
          name="comment"
          cols="30"
          rows="15"
          className="comment"
          id="comment"
          disabled
        ></textarea>
        <button type="submit" className="form_button" disabled>
          Submit
        </button>
      </form>
    );
  };

  return (
    <>
      {TokenServices.hasAuthToken()
        ? renderFormLoggedIn()
        : renderDisabledForm()}
    </>
  );
}

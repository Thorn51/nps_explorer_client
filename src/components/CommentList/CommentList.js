import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Comment from "../Comment/Comment";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./CommentList.css";

export default function CommentList(props) {
  const { comments, getComments } = useContext(GlobalContext);

  let [isBusy, setBusy] = useState(true);

  // Get comments from database
  useEffect(() => {
    getComments();
    setBusy(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderParkComments = () => {
    let parkComments = comments.filter(
      comment => comment.parkCode === props.parkCode
    );
    if (parkComments.length > 0) {
      return (
        <section className="feedback">
          <h3 className="section_title">Comments</h3>
          {parkComments.map(comment => (
            <Comment
              key={comment.id}
              author={comment.authorName}
              date={comment.dateSubmitted}
              comment={comment.commentText}
            />
          ))}
          <CommentForm parkCode={props.parkCode} parkName={props.parkName} />
        </section>
      );
    } else {
      return (
        <section className="feedback">
          <h3 className="section_title">Comments</h3>
          <p>Be the first to comment.</p>
          <CommentForm parkCode={props.parkCode} parkName={props.parkName} />
        </section>
      );
    }
  };

  return (
    <>
      {isBusy === false ? (
        renderParkComments()
      ) : (
        <section className="feedback">
          <h3 className="section_title">Gathering Comments</h3>
        </section>
      )}
    </>
  );
}

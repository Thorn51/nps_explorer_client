import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Comment from "../Comment/Comment";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./CommentList.css";

export default function CommentList(props) {
  const { comments } = useContext(GlobalContext);
  let parkComments = comments.filter(
    comment => comment.parkCode === props.parkCode
  );
  return (
    <section className="feedback">
      <h3 className="section_title">Comments</h3>
      {parkComments.map(comment => (
        <Comment
          key={comment.id}
          author={comment.author}
          date={comment.dateSubmitted}
          comment={comment.comment}
        />
      ))}
      <CommentForm parkCode={props.parkCode} parkName={props.parkName} />
    </section>
  );
}

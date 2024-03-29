import React,{useContext} from 'react';
import CommentContext  from '../context/CommentProvider';


const CommentList = (props) => {

    const { comments } = useContext(CommentContext);
    // console.log("Commets on page" , comments);
    comments.reverse();

    if (!comments || comments.length === 0) {
        return null;
    }

  return (
    <div className="container text-center">
      <div className="row row-cols-1">
        {comments.map((comment, index) => (
          <div key={index} className="col p-2">
            <textarea
              className="form-control"
              type="text"
              id={`comment-${index}`}
              name="comment"
              value={comment.content}
              readOnly
            ></textarea>
            <div>
              <b>Posted By - </b> {comment.createdBy.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;

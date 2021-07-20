import { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core"
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/Post"
import useStyles from "./styles";

const CommandSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const dispatch = useDispatch()
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post?.comments);
  const commentRef = useRef();
  const handleComment = async() => {
    const finalCommant = `${user?.result?.name}: ${comment}`
    const newcomments = await dispatch(commentPost(finalCommant, post._id));
    setComments(newcomments);
    setComment("");
    commentRef.current.scrollIntoView({behavior:'smooth'});
  }
  console.log(`${user?.result?.name}: ${comment}`)
  console.log(comments)
  return <div>
    <div className={classes.commentsOuterContainer}>
      <div className={classes.commentsInnerContainer}>
        <Typography gutterBottom variant="h6">Comments</Typography>
        {comments.map((c, i) => (
          <Typography key={i} gutterBottom variant="subtitle1">
            <strong>{c.split(': ')[0]}</strong>:<span>{c.split(':')[1]}</span>
          </Typography>
        ))}
        <div ref={commentRef}/>
      </div>
      {user?.result?.name && (
        <div style={{ width: '70%' }}>
          <Typography gutterBottom variant="h6">Write a comment</Typography>
          <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div>
      )}
    </div>
  </div>
}

export default CommandSection;
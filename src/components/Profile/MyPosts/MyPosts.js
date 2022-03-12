import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.text} likes={p.likesCount}/>);
  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator(text));
    props.dispatch(updatePostTextActionCreator(''));
  };
  let newPostElement = React.createRef();

  let onPostChange = () => {
    console.log(props.newPostText);
    let text = newPostElement.current.value;
    props.dispatch(updatePostTextActionCreator(text));
  };

  return (
    <div className={classes.content}>
      <div>
        <h2>My posts</h2>
        <div>New post:</div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
        <div>
          <button onClick={addPost}>Submit</button>
        </div>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    
    </div>
  );
};

export default MyPosts;

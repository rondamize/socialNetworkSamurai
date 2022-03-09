import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.text} likes={p.likesCount}/>);
  let addPost = () => {
    // debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updatePostText('');
  };
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
    // props.newPostText = newPostElement.current.value;
    // debugger;
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

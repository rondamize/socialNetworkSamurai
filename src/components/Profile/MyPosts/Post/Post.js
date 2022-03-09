import classes from './Post.module.css';
const Post = (props) => {
  return (
    <div className={classes.item}>
        <img src="https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318" />
        <span className={classes.messageText}>
            {props.message}
        </span>
        <div>
          <span>{props.likes} likes</span>
        </div>
    </div>  
  );
};

export default Post;

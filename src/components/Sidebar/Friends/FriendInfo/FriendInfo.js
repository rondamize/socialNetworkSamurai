import classes from "./FriendInfo.module.css";

// src='https://cdn.shopify.com/s/files/1/1656/5327/products/Siser_Permanent_Vinyl_Easy_PSV_Blue_Skies_1024x1024.jpg?v=1533831771'

const FriendInfo = (props) => {
    return (
        <div className={classes.friendInfo}>
            <div>
                <img className={classes.friendInfoImg} src={props.img} />
            </div>
            <div className={classes.friendName}>
                <p>{props.name}</p>
            </div>
        </div>
    );
};

export default FriendInfo;
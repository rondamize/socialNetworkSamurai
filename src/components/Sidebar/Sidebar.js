import classes from "./Sidebar.module.css";
import FriendInfo from "./Friends/FriendInfo/FriendInfo";
import React from "react";

const Sidebar = (props) => {
    debugger;
    let friendsElements = props.state.friends.map(f => <FriendInfo name={f.name} img={f.img} />);
    console.log(friendsElements);

    return (
        <div className={classes.sidebarFriends}>
            <h2>Friends</h2>
            <div className={classes.allFriends}>
                {friendsElements}
            </div>
        </div>

        );
};

export default Sidebar;
import classes from './Users.module.css'
import userImage from '../../assets/images/user.png'
import React from "react";
import {NavLink} from "react-router-dom";
import {UsersApi} from "../../api/api";
const Users = (props) => {
    let pagesNumber = Math.ceil(props.totalUsersCount / props.usersPerPage);
    let pages = [];
    // for (let i=1; i <= 10; i++) {
    //     pages.push(i);
    // }
    for (let i=1; i <= pagesNumber; i++) {
        pages.push(i);
    }
    return (
        <div>
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p && classes.currentPage}
                               onClick={(e) => props.onPageChange(p)}>{p}</button>
            })}
        </div>
        {
            props.users.map(u => {
                return (
                    <div className={classes.userInfo}>
                                        <span className={classes.photoFollow}>
                                            <div className={classes.photo}>
                                               <NavLink to={`/profile/${u.id}`}><img src={u.photos.small === null ? userImage : u.photos.small}/></NavLink>
                                            </div>
                                            <div>
                                                {u.followed ?
                                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                        onClick={() => {props.unfollowThunkCreator(u.id);}}>
                                                        Unfollow
                                                    </button> :
                                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                        onClick={() => {props.followThunkCreator(u.id);}}>
                                                        Follow
                                                    </button>}
                                            </div>
                                        </span>
                        <div className={classes.infoContent}>
                                            <span className={classes.nameStatus}>
                                                <div className={classes.name}>{u.name}</div>
                                                <div className={classes.status}>{u.status}</div>
                                            </span>
                            <span className={classes.location}>
                                                <div className={classes.city}>{"u.location.city"}</div>
                                                <div className={classes.country}>{"u.location.country"}</div>
                                            </span>
                        </div>
                    </div>
                )
            })
        }
    </div>
    );
}

export default Users;
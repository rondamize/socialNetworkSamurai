import classes from './Users.module.css'
import * as axios from "axios";
import userImage from '../../assets/images/user.png'
import React from "react";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesNumber = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
        let pages = [];
        for (let i=1; i <= pagesNumber; i++) {
           pages.push(i);
        }

        return <div>
                <div>
                    {pages.map(p => {
                        return <button className={this.props.currentPage === p && classes.currentPage}
                        onClick={(e) => this.onPageChange(p)}>{p}</button>
                    })}
                </div>
                {
                    this.props.users.map(u => {
                        return (
                            <div className={classes.userInfo}>
                                        <span className={classes.photoFollow}>
                                            <div className={classes.photo}><img
                                                src={u.photos.small === null ? userImage : u.photos.small}/></div>
                                            <div>
                                                {u.followed ?
                                                    <button onClick={() => this.props.toggleFollow(u.id)}>Unfollow</button> :
                                                    <button onClick={() => this.props.toggleFollow(u.id)}>Follow</button>}
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
    }

}

export default Users;
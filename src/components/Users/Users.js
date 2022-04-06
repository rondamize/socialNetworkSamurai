import classes from './Users.module.css'
const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div className={classes.userInfo}>
                            <span className={classes.photoFollow}>
                                <div className={classes.photo}><img src={u.photoUrl} /></div>
                                <div>
                                    {u.followed ? <button onClick={() => props.toggleFollow(u.id)}>Unfollow</button> : <button onClick={() => props.toggleFollow(u.id)}>Follow</button>}
                                </div>
                            </span>
                            <div className={classes.infoContent}>
                                <span className={classes.nameStatus}>
                                    <div className={classes.name}>{u.name}</div>
                                    <div className={classes.status}>{u.status}</div>
                                </span>
                                <span className={classes.location}>
                                    <div className={classes.city}>{u.location.city}</div>
                                    <div className={classes.country}>{u.location.country}</div>
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
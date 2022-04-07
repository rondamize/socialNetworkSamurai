import classes from './Users.module.css'
import * as axios from "axios";
import userImage from '../../assets/images/user.png'
const Users = (props) => {
    // if (props.users.length === 0) {
    //     // debugger;
    //     props.setUsers([
    //         {id: 1, photoUrl: 'https://ae01.alicdn.com/kf/HTB1ktC6RXXXXXcFXXXXq6xXFXXX4/Diamond-embroidery-cat-Animals-Diamond-Mosaic-Embroidery-Ribbons-Mosaic-Pictures-DIY-5d-The-Diamod-Mosaica-Bead.jpg',
    //             followed: false, name: 'Ivan', status: 'Wanna hang out?', location: {country: 'Belarus', city: 'Minsk'}},
    //         {id: 2, photoUrl: 'https://kartinkin.net/uploads/posts/2022-02/1644919517_17-kartinkin-net-p-sobachki-kartinki-17.jpg',
    //             followed: true, name: 'Michail', status: 'Remember me?', location: {country: 'Ukraine', city: 'Kyiv'}},
    //         {id: 3, photoUrl: 'https://funik.ru/wp-content/uploads/2018/12/5401765deadc827f3822.jpg',
    //             followed: true, name: 'Maxim', status: 'I love dogs', location: {country: 'Georgia', city: 'Tbilisi'}},
    //         {id: 4, photoUrl: 'https://funart.pro/uploads/posts/2021-07/1627174872_4-funart-pro-p-godovalii-medvezhonok-zhivotnie-krasivo-fo-4.jpg',
    //             followed: false, name: 'Eugenia', status: 'I wanna die', location: {country: 'Poland', city: 'Warsaw'}},
    //     ]);
    // }

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div className={classes.userInfo}>
                            <span className={classes.photoFollow}>
                                <div className={classes.photo}><img src={u.photos.small === null ? userImage : u.photos.small} /></div>
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
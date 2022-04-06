import {connect} from "react-redux";
import Users from "./Users";
import {setUsersActionCreator, toggleFollowActionCreator} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
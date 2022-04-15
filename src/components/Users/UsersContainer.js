import {connect} from "react-redux";
import Users from "./UsersClass";
import {
    setCurrentPageCreator,
    setTotalUsersCountCreator,
    setUsersActionCreator,
    toggleFollowActionCreator
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersPerPage: state.usersPage.usersPerPage,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageCreator(currentPage));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountCreator(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
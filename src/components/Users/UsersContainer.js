import {connect} from "react-redux";
import {
    followThunkCreator,
    getUsersThunkCreator,
    manageFollowButton,
    toggleFollow,
    toggleIsFetching, unfollowThunkCreator,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader"

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.usersPerPage);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.usersPerPage);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users onPageChange= {this.onPageChange}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      usersPerPage={this.props.usersPerPage}
                      users={this.props.users}
                      followingInProgress={this.props.followingInProgress}
                      unfollowThunkCreator={this.props.unfollowThunkCreator}
                      followThunkCreator={this.props.followThunkCreator}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersPerPage: state.usersPage.usersPerPage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    toggleFollow,
    toggleIsFetching,
    manageFollowButton,
    getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
})(UsersContainer);
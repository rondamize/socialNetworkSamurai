import {connect} from "react-redux";
import {
    manageFollowButton,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleIsFetching
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader"
import {UsersApi} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        UsersApi.getUsers(this.props.currentPage, this.props.usersPerPage)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        UsersApi.getUsers(pageNumber, this.props.usersPerPage)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users onPageChange= {this.onPageChange}
                      toggleFollow={this.props.toggleFollow}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      usersPerPage={this.props.usersPerPage}
                      users={this.props.users}
                      followingInProgress={this.props.followingInProgress}
                      manageFollowButton={this.props.manageFollowButton}
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
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    setCurrentPage,
    manageFollowButton
})(UsersContainer);
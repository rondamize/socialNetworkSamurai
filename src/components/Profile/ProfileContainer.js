import React from "react";
import Profile from "./Profile";
import {
    getProfileThunkCreator,
    setProfilePage,
    setStatusThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profileReducer";
import {connect} from "react-redux"
import {authorisationThunkCreator} from "../../redux/authReducer";
import {withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.router.params.userId;
        // debugger;
        if (!id) {
            id = 23293;
        }
        this.props.getProfileThunkCreator(id);
        this.props.setStatusThunkCreator(id);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setProfilePage, getProfileThunkCreator,
        authorisationThunkCreator, setStatusThunkCreator, updateStatusThunkCreator}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
import React from "react";
import Profile from "./Profile";
import {getProfileThunkCreator, setProfilePage} from "../../redux/profileReducer";
import {connect} from "react-redux"
import {useLocation, useNavigate, useParams, Navigate} from "react-router-dom";
import {authorisationThunkCreator} from "../../redux/authReducer";
import {withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.router.params.userId;
        if (!id) {
            id = 2;
        }
        this.props.getProfileThunkCreator(id);
    }

    render() {
        this.props.authorisationThunkCreator();
        // debugger;
        if (!this.props.isAuthorised) return <Navigate to={'/login'}/>

        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {setProfilePage, getProfileThunkCreator, authorisationThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
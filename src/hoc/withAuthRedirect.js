import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {authorisationThunkCreator} from "../redux/authReducer";

let mapStateToProps = (state) => ({
    isAuthorised: state.auth.isAuthorised
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        // componentDidUpdate() {
        //     alert('did update');
        // }

        render() {
            authorisationThunkCreator();
            if (!this.props.isAuthorised) return <Navigate to={'/login'}/>
            return <Component {...this.props} />
        }
    }

    let connectedRedirectComponent = connect(mapStateToProps, {authorisationThunkCreator})(RedirectComponent);

    return connectedRedirectComponent;
}
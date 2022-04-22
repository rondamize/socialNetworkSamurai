import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authorisationThunkCreator, setAuthorisedUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authorisationThunkCreator();
    }

    render() {

        return(
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuthorised: state.auth.isAuthorised,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthorisedUserData, authorisationThunkCreator})(HeaderContainer);
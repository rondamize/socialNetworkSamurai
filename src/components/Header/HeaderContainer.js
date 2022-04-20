import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthorisedUserData} from "../../redux/authReducer";
import {AuthorisationApi} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        AuthorisationApi.Auth()
            .then(data => {
                debugger;
                if (data.resultCode == 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthorisedUserData(id, login, email);
                }
            })
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

export default connect(mapStateToProps, {setAuthorisedUserData})(HeaderContainer);
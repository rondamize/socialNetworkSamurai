import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthorisedUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (!response.resultCode) {
                    let {id, login, email} = response.data.data;
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
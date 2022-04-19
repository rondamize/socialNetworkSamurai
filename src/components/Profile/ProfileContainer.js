import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setProfilePage} from "../../redux/profileReducer";
import {connect} from "react-redux"
import profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfilePage(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setProfilePage})(ProfileContainer);

import React from "react";
import Profile from "./Profile";
import {getProfileThunkCreator, setProfilePage} from "../../redux/profileReducer";
import {connect} from "react-redux"
import {useLocation, useNavigate, useParams,} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.router.params.userId;
        if (!id) {
            id = 2;
        }
        this.props.getProfileThunkCreator(id);
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

let withRouter = (Component) => {
    return (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setProfilePage, getProfileThunkCreator})(WithUrlDataContainerComponent);

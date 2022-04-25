import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateStatusThunkCreator} from "../../redux/profileReducer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatusThunkCreator}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;

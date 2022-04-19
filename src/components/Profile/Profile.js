import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    // debugger;
    return (
        <div>
            <ProfileInfo  profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;

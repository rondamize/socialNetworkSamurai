import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost} updatePostText={props.updatePostText} newPostText={props.state.newPostText} />
        </div>
    );
};

export default Profile;

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    // debugger;
    return (
        <div>
            <ProfileInfo />
            {/*<MyPosts posts={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText}/>*/}
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;

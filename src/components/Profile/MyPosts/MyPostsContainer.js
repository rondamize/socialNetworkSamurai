import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = (text) => {
    props.store.dispatch(addPostActionCreator(text));
    props.store.dispatch(updatePostTextActionCreator(''));
  };

  let onPostChange = (text) => {
    props.store.dispatch(updatePostTextActionCreator(text));
  };

  return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                  newPostText={state.profilePage.newPostText}
                  posts={state.profilePage.posts}/>
  };

export default MyPostsContainer;

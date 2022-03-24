import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//   let state = props.store.getState();
//
//   let addPost = (text) => {
//     props.store.dispatch(addPostActionCreator(text));
//     props.store.dispatch(updatePostTextActionCreator(''));
//   };
//
//   let onPostChange = (text) => {
//     props.store.dispatch(updatePostTextActionCreator(text));
//   };
//
//   return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                   newPostText={state.profilePage.newPostText}
//                   posts={state.profilePage.posts}/>
//   };

let mapStateToProps = (state) => {
 return {
   posts: state.profilePage.posts,
   newPostText: state.profilePage.newPostText
 }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updatePostTextActionCreator(text));
    },
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

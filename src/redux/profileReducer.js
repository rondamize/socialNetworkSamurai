const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

//в качестве state передаем profilePage
const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: action.postMessage,
                likesCount: 0
            };
            state.posts.push(newPost);
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    };
};

export default profileReducer;

export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text});

export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
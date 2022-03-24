const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

let initialState = {
    posts: [
        {id:1, text:'The 7th episode was for sure the best one in whole season 2!!', likesCount: 30},
        {id:3, text:'Looking forward to see Euphoria s2e7', likesCount: 16},
        {id:2, text:'Hey friend, I\'m here!', likesCount: 15},
        {id:4, text:'Lalalal', likesCount: 15}
    ],
    newPostText: "Hello world!"
};

//в качестве state передаем profilePage
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    };
};

export default profileReducer;

export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text});

export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
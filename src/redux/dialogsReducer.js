const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

//в качестве state передаем dialogsPage
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                text: action.newMessageText
            };
            state.messages.push(newMessage);
            return state;
        default:
            return state;
    };
};

export default dialogsReducer;

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, newMessageText: message});

export const updateMessageTextActionCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, newText: message});
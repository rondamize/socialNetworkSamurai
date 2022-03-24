const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Rondo Rondo'},
        {id: 2, name: 'Дмитрий Сидоров'},
        {id: 3, name: 'Катя Герасимова'},
        {id: 4, name: 'Катерина Панкина'},
        {id: 5, name: 'Александр Котик'},
        {id: 6, name: 'Владимир Степанов'}
    ],
    messages: [
        {id: 1, text: 'Hey, how is your front-end'},
        {id: 2, text: 'I love you so much!'},
        {id: 3, text: 'You are the best girl in the world bro'},
        {id: 4, text: 'Haven\'t heard from you for so long'},
    ],
    newMessageText: "Hi!"
};

//в качестве state передаем dialogsPage
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy  = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                text: state.newMessageText
            };
            let stateCopy  = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        default:
            return state;
    };
};

export default dialogsReducer;

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, newMessageText: message});

export const updateMessageTextActionCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, newText: message});
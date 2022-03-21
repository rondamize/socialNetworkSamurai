import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;

    let addMessage = (message) => {
        props.store.dispatch(addMessageActionCreator(message));
        props.store.dispatch(updateMessageTextActionCreator(''));
    };

    let updateMessageText = (message) => {
        props.store.dispatch(updateMessageTextActionCreator(message));
    };

    return (
        <Dialogs addMessage={addMessage} updateMessageText={updateMessageText}
                 dialogsPage={dialogsPage} />
    );
};

export default DialogsContainer;
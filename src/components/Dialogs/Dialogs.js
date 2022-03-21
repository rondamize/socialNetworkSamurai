import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message text={m.text} />);
    let newMessage = React.createRef();

    let addMessage = () => {
        let message = newMessage.current.value;
        props.addMessage(message);
    };

    let updateMessageText = () => {
        let message = newMessage.current.value;
        props.updateMessageText(message);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessage} onChange={updateMessageText} value={props.dialogsPage.newMessageText}></textarea>
                <button onClick={addMessage}>Submit</button>
            </div>

        </div>
    );
};

export default Dialogs;
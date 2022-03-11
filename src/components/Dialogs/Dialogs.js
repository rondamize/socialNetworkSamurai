import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/State";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message text={m.text} />);
    let newMessage = React.createRef();

    let addMessage = () => {
        let message = newMessage.current.value;
        props.dispatch(addMessageActionCreator(message));
        props.dispatch(updateMessageTextActionCreator(''));
    };

    let updateMessageText = () => {
        let message = newMessage.current.value;
        props.dispatch(updateMessageTextActionCreator(message));
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
                <textarea ref={newMessage} onChange={updateMessageText} value={props.state.newMessageText}></textarea>
                <button onClick={addMessage}>Submit</button>
            </div>

        </div>
    );
};

export default Dialogs;
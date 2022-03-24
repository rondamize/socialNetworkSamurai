import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let dialogsPage = props.store.getState().dialogsPage;
//
//     let addMessage = (message) => {
//         props.store.dispatch(addMessageActionCreator(message));
//         props.store.dispatch(updateMessageTextActionCreator(''));
//     };
//
//     let updateMessageText = (message) => {
//         props.store.dispatch(updateMessageTextActionCreator(message));
//     };
//
//     return (
//         <Dialogs addMessage={addMessage} updateMessageText={updateMessageText}
//                  dialogsPage={dialogsPage} />
//     );
// };

let mapStateToProps = (state) => {
   return {
       dialogsPage: state.dialogsPage
   }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message));
        },
        updateMessageText: (message) => {
            dispatch(updateMessageTextActionCreator(message));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
import React from "react";
import Sidebar from "./Sidebar";
import sidebar from "./Sidebar";
import {connect} from "react-redux";


// const SidebarContainer = (props) => {
//
//     return <Sidebar sideBar={store.getState().sideBar}/>;
// }

let mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
}

const SidebarContainer = connect(mapStateToProps, null)(Sidebar);
export default SidebarContainer;
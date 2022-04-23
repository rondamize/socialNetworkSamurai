import React from "react";
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
       inEditMode: false
    }

    toggleEditMode() {
        this.setState({
            inEditMode: !this.state.inEditMode
        })
    }

    render() {
        return (
            <div>
                {this.state.inEditMode ?
                    <div>
                        <input onBlur={this.toggleEditMode.bind(this)} autoFocus={true}
                               value={this.props.status}></input>
                    </div>
                :
                    <div>
                        <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }

};

export default ProfileStatus;

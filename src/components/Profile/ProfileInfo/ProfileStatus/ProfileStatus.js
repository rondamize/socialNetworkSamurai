import React from "react";
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        inEditMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            inEditMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            inEditMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // debugger;
        // let a = this.state;
        // let b = this.props;
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.inEditMode ?
                    <div>
                        <input onChange={this.onStatusChange}
                               onBlur={this.deactivateEditMode} autoFocus={true}
                               value={this.state.status}/>
                    </div>
                :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                    </div>
                }
            </div>
        )
    }

};

export default ProfileStatus;

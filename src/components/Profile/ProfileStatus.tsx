import React from "react";
import styles from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: any
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.state.editMode = true;
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.state.editMode = true;
    }

    render() {
        const {status} = this.props
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={status}/>
                    </div>}
            </div>
        )
    }
}

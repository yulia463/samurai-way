import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/Redux-store";
import {withRouter} from "react-router-dom";
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from "../../redux/ProfileReducer";
import {compose} from "redux";

function AuthRedirect() {
    return null;
}

class ProfileContainer extends React.Component<any, ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)

    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatusTC}
                />
            </div>
        )
    }
};

let AuthRedirectComponent = ProfileContainer

type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status

});
type mapStateToPropsType = {
    profile: ProfileType
    status: string
}
type mapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    //  WithAuthRedirect
)(ProfileContainer)


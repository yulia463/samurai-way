import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/Redux-store";
import {withRouter} from "react-router-dom";
import {getUserProfileTC} from "../../redux/ProfileReducer";

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)

    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
};

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent);


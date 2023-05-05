import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/Redux-store";
import { withRouter} from "react-router-dom";
import {getUserProfileTC, ProfileType} from "../../redux/ProfileReducer";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";

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

    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
};

let AuthRedirectComponent = ProfileContainer


type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,

});
type mapStateToPropsType = {
    profile: ProfileType
   // isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
}


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent);


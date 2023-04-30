import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/Redux-store";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfileTC, ProfileType} from "../../redux/ProfileReducer";

class ProfileContainer extends React.Component<any, ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)

    }

    render() {
        if (this.props.isAuth === false) return <Redirect to={"/login"}/>
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
};

type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,
    isAuth: state.auth.isAuth
});
type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent);


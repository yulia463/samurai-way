import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/ProfileReducer";
import {AppStateType} from "../../redux/Redux-store";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        console.log(this.props.setUserProfileAC)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {

                this.props.setUserProfileAC(response.data)
            });
    }

    render() {
        console.log(this.props.profile)
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
export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent);


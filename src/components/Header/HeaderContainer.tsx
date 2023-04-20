import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/Redux-store";
import {setAuthUserDataAC} from "../../redux/AuthReducer";
import {UserType} from "../../redux/UsersReducer";
import {DialogsPagesType} from "../../redux/DialogsReducer";

// export class HeaderContainer extends React.Component<AuthUserPropsType, {}> {
//     componentDidMount() {
//
//         axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//             withCredentials: true
//         })
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     let {id, login, email} = response.data
//                     this.props.setAuthUserDataAC(id, email, login);
//                 }
//             });
//     }
//
//     render() {
//         return <Header {...this.props}/>
//     }
//
// }

export type MapStateToPropsType = {
    login: string | null;
    isAuth: boolean;
    // userId: string;
    // email: string;
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export type AuthUserPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapDispatchToPropsType = {
    setAuthUserDataAC: (userID: number, email: string, login: string) => void
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserDataAC})(Header);

//{...this.props}

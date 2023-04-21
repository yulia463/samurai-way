import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/Redux-store";
import {setAuthUserDataAC} from "../../redux/AuthReducer";
import {UserType} from "../../redux/UsersReducer";
import {DialogsPagesType} from "../../redux/DialogsReducer";


export type HeaderPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof setAuthUserDataAC>
export class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setAuthUserDataAC(id, email, login);
                }
            });
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }

}

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
    setAuthUserDataAC: (id: number, email: string, login: string) => void
}

//export const HeaderContainer = connect(mapStateToProps, {setAuthUserDataAC})(Header);
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)
//{...this.props}

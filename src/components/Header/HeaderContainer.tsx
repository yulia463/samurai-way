import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/Redux-store";
import {getAuthUserDataTC, setAuthUserDataAC} from "../../redux/AuthReducer";



//export type HeaderPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof setAuthUserDataAC>

export class HeaderContainer extends React.Component<any, AuthUserPropsType> {
    componentDidMount() {

        getAuthUserDataTC()
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }

}

export type MapStateToPropsType = {
    login: string | null;
    isAuth: boolean;
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export type AuthUserPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    setAuthUserDataAC: (id: number, email: string, login: string) => void
}

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer)
//{...this.props}

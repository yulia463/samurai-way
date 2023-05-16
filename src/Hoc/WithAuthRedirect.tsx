import {Redirect} from "react-router-dom";
import React from "react";
import {AppStateType} from "../redux/Redux-store";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});

export const WithAuthRedirect = (Component:any) => {

    class RedirectComponent extends React.Component<any, any>{
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>

            return <Component {...this.props}/>
        }

    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent;

}
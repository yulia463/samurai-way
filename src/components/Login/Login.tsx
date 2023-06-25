import React from 'react';
import {Form, Formik, Field} from 'formik';
import {connect, useDispatch} from "react-redux";
import {loginTC} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";

type LoginFormProps = {
    onSubmit: (data: any) => void;
}

export const LoginForm = (props: LoginFormProps) => {
    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
                rememberMe: false,
            }}
            onSubmit={async (values) => {
                props.onSubmit(values)
            }}
        >
            <Form>
                <Field id="email" name="email" placeholder="email"/>
                <Field id="password" name="password" placeholder="Password" type={"password"}/>
                <div>
                    <label htmlFor="rememberMe">
                        <Field id="rememberMe" name="rememberMe" type="checkbox"/>
                        Remember me
                    </label>
                </div>
                <div>
                    <button type={"submit"}>Login</button>
                </div>
            </Form>
        </Formik>)

}
// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const dispatch = useDispatch();
    const onSubmit = (formData: any) => {
        dispatch(loginTC(formData.email, formData.password, formData.rememberMe))
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps =(state:any)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {loginTC})(Login)
import React from 'react';
import {Form, Formik, Field} from 'formik';
import {connect, useDispatch} from "react-redux";
import {loginTC} from "../../redux/AuthReducer";
import {reduxForm} from "redux-form";

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
    return <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={onSubmit}/>
        {/*<LoginReduxForm onSubmit={onSubmit}/>*/}
    </div>
}
export default connect(null, {loginTC})(Login)
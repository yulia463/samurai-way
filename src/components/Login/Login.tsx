import React from 'react';
import {Form, Formik, Field} from 'formik';

export const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
                rememberMe: false,
            }}
            onSubmit={async (values) => {
                console.log(values)
            }}
        >
            <Form>
                <Field id="login" name="login" placeholder="Login"/>
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

export const Login = () => {
    return <div>
        <h1>LOGIN</h1>
        <LoginForm/>
    </div>
}
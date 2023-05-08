import React from 'react';


export const LoginForm = () => {
    return (<form>
            <div><input placeholder={"Login"}/></div>
            <div><input placeholder={"Password"}/></div>
            <div><input type={'checkbox'}/> Remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>)

}

export const Login = () => {
    return <div>
        <h1>LOGIN</h1>
        <LoginForm/>
    </div>
}
import React from "react";
import {reduxForm, InjectedFormProps, Field} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            <div>
                <button >Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType>({ form: "login"})(LoginForm)

const Login = () => {
    const onSubmit = (fomData: FormDataType) => {
        console.log(fomData)
    }
    return (
        <div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;
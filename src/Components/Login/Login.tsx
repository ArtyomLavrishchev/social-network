import React from "react";
import {reduxForm, InjectedFormProps, Field} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength10 = maxLengthCreator(10)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} component={Input} name={"login"} placeholder={"Login"}/>
            </div>
            <div>
                <Field validate={[required, maxLength10]} component={Input} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
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
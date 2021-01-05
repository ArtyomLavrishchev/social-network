import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateRedux} from "../../redux/redux-store";
import s from "../Common/FormsControls/FormsControls.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const maxLength40 = maxLengthCreator(40)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (
    {
        handleSubmit,
        error
    }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required, maxLength40], Input, null, null)}
            {createField("Password", "password", [required, maxLength40], Input, null, {type: "password"})}
            {createField(null, "rememberMe", null, Input, "remember me", {type: "checkbox"})}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (fomData: FormDataType) => {
        props.login(fomData.email, fomData.password, fomData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state: RootStateRedux) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
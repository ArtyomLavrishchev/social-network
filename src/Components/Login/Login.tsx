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
    captcha: string
}
type LoginFormOwnProps = {
    captchaURL: string | null
}
const maxLength40 = maxLengthCreator(40)

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = (
    {
        handleSubmit,
        error,
        captchaURL
    }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required, maxLength40], Input, null, null)}
            {createField("Password", "password", [required, maxLength40], Input, null, {type: "password"})}
            {createField(null, "rememberMe", null, Input, "remember me", {type: "checkbox"})}
            {captchaURL && <div>
                <img src={captchaURL} alt={'captcha'}/>
                {createField('Symbols from image', "captcha", [required], Input, null, null)}
            </div>}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: "login"})(LoginForm)

type MapStateToPropsType = {
    captchaURL: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (fomData: FormDataType) => {
        props.login(fomData.email, fomData.password, fomData.rememberMe, fomData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    );
}

const mapStateToProps = (state: RootStateRedux): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);
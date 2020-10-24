import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {AuthMapStateToPropsType} from "./HeaderContainer";

type HeaderType = AuthMapStateToPropsType & {
    logout: () => void
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
                alt={'avatar'}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}  <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
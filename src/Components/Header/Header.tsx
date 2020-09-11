import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {AuthMapStateToPropsType} from "./HeaderContainer";

const Header = (props: AuthMapStateToPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
                alt={'avatar'}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
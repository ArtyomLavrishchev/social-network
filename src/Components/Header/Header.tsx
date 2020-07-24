import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"/>
        </header>
    );
}

export default Header;
import React from 'react';
import {Link} from "react-router-dom";
import {Button, Col, Layout, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reducer";

const {Header} = Layout;

export const AppHeader = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const logoutCallback = () => {
        dispatch(logout())
    }
    return (
        <Header className="site-layout-background" style={{padding: 0}}>
            <Row>
                <Col span={22}/>
                <Col span={2}>
                    {isAuth ? <Button type={'ghost'} ghost size={'middle'} onClick={logoutCallback}>Logout</Button> :
                        <Button type={'ghost'} ghost size={'middle'} onClick={logoutCallback}>
                            <Link to={'/login'}>Login</Link>
                        </Button>}
                </Col>
            </Row>
        </Header>
    );
};



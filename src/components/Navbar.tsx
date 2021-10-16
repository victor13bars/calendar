import React, {FC} from 'react';
import {Col, Layout, Menu, Row} from 'antd'
import {useHistory} from 'react-router-dom';
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedselector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()
    const {logout} = useActions()
    return (
        <Layout.Header>
            <Row justify='end'>

                {isAuth
                    ? <>
                        <Col span={2}>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <div style={{color: 'white'}}>
                                    {user.username}
                                </div>
                            </Menu>
                        </Col>
                        <Col span={2}>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item
                                    onClick={logout}
                                    key={"1"}
                                >
                                    Logout
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </>
                    :
                    <Col span={2}>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={() => router.push(RouteNames.LOGIN)}
                                key={"1"}
                            >
                                Login
                            </Menu.Item>
                        </Menu>
                    </Col>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
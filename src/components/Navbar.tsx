import React, {FC} from 'react';
import {Col, Layout, Menu, Row} from 'antd'
import {useHistory} from 'react-router-dom';
import {RouteNames} from "../router";

const Navbar: FC = () => {
    const router = useHistory()
    const auth = true
    return (
        <Layout.Header>
            <Row justify='end'>

                {auth
                    ? <>
                        <Col span={2}>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <div>
                                    Viktor
                                </div>
                            </Menu>
                        </Col>
                        <Col span={2}>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item
                                    onClick={() => console.log("Выйти")}
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
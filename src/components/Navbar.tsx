import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import { useNavigate } from 'react-router-dom'
import {RouteNames} from "../router";

const Navbar: FC = () => {
    const router = useNavigate()
    const auth = true
    return (
        <div>
            <Layout.Header>
                <Row justify={"center"}/>
                { auth ?
                    <Menu theme={"dark"} mode={'horizontal'} selectable={false}>
                       <div>USER</div>
                        <Menu.Item onClick={()=> console.log("ВЫШЕЛ")} key={'loginKey'}> LOGOUT </Menu.Item>
                    </Menu>
                    :
                    <Menu theme={"dark"} mode={'horizontal'} selectable={false}>
                        <Menu.Item onClick={()=> router(RouteNames.LOGIN)} key={'logoutKey'}> LOGIN </Menu.Item>
                    </Menu>
                }
            </Layout.Header>

        </div>
    );
};

export default Navbar;

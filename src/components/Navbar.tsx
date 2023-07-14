import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import { useNavigate } from 'react-router-dom'
import {RouteNames} from "../router";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const router = useNavigate()
    const auth = useSelector((state:RootState) => state.auth)
    const {logout} = useActions();
    const {user} = useSelector((state: RootState) => state.auth)
    console.log(auth)
    return (
        <div>
            <Layout.Header>
                <Row/>
                { auth ?
                    <Menu theme={"dark"} mode={'horizontal'} >
                       CURRENT USER NAME: {user.username}
                        <Menu.Item onClick={()=> logout()} key={'loginKey'}> LOGOUT </Menu.Item>
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

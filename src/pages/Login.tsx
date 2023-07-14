import React, {FC} from 'react';
import {Card, Row} from "antd";
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
    return (
        <div>
            <Row justify={"center"} align={'middle'} style={{height: `calc(100vh - 64px)`}}>
                <Card style={{backgroundColor: "lightblue"}}>
                    <LoginForm/>
                </Card>
            </Row>
        </div>
    );
};

export default Login;

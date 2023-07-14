import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const {error, isLoading} = useSelector((state:RootState) => state.auth)
    const {login} = useActions()

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }

    const handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.target.value)
    }

    return (
        <Form onFinish={() => login(userName, userPassword)}>
            { error && <div style={{color:'red'}}>{error}</div>}
            <Form.Item label={'userName'} name={'userName'} rules={[{ required: true, message:'Enter Name'}]}>
                <Input onChange={handleUser} value={userName}/>
            </Form.Item>
            <Form.Item label={'Password'} name={'Password'} rules={[{ required: true, message:'Enter Password'}]}>
                <Input onChange={handlePass} value={userPassword} type={'password'}/>
            </Form.Item>
            <Button type={"primary"} htmlType={"submit"} loading={isLoading}>Submit</Button>
        </Form>
    );
};

export default LoginForm;

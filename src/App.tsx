import React, {FC, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/Navbar";
import {useActions} from "./hooks/useActions";
import {User} from "./store/reducers/auth";

const App: FC = () => {
    const {setUser, setAuth} = useActions();

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setAuth(true)
            setUser({ username:localStorage.getItem('username')} as User)
        }
    }, [])


  return (
    <div className="App">
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>

    </div>
  );
}

export default App;

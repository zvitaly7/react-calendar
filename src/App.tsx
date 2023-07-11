import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/Navbar";

const App: FC = () => {
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

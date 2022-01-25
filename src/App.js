import React from "react";
import "antd/dist/antd.css";
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import About from "./components/About/About";
import {Layout, Menu} from "antd";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";
import MyInput from "./components/Input/MyInput";
import Posts from "./components/Posts/Posts";
import './App.css';

const {Header, Content, Footer} = Layout;

function App() {
    return (
        <Router>
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                        <Menu.Item key="1"><NavLink to={'/'}>Home</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to={'/about'}>About</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to={'/counter'}>Counter</NavLink></Menu.Item>
                        <Menu.Item key="4"><NavLink to={'/input'}>Input</NavLink></Menu.Item>
                        <Menu.Item key="5"><NavLink to={'/posts'}>Posts</NavLink></Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 650}}>
                        <div className={'container pt-4'}>
                            <Routes>
                                <Route path={'/'} element={<Home/>}/>
                                <Route path={'/about'} element={<About/>}/>
                                <Route path={'/counter'} element={<Counter/>}/>
                                <Route path={'/input'} element={<MyInput/>}/>
                                <Route path={'/posts'} element={<Posts/>}/>
                            </Routes>
                        </div>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>This is my Application for studying React/JS. by Vlas Bochkarev</Footer>
            </Layout>
        </Router>
    );
}

export default App;

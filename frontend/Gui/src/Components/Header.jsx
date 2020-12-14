import React from 'react'
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom"

const {Header} = Layout;

const CustomHeader = (props) => {


    return (
        <Header style={{position: 'absolute', zIndex: 1, top: "0", width: '100%', marginBottom: '25px'}}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">Acceuil</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/thematique">Programmes et Projets</Link></Menu.Item>
                <Menu.Item key="3">
                    <Link to="/indicateur">Indicateurs</Link></Menu.Item>
                <Menu.Item key="4">
                    <Link to="/contact">Contact</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/machine">TestMachine</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
};

export default CustomHeader
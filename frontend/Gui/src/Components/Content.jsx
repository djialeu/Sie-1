import React from 'react'
import {Layout} from "antd";
import Trace from "./Trace";
import ThemaProg from "./ThemaProg";

const {Content} = Layout;


const CustomContent = (props) => {
    console.log("render");

    return (
        <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
            <Trace/>
            <ThemaProg/>
        </Content>
    )
};

export default CustomContent
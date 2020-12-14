import React from 'react'
import {Layout} from 'antd';
import BaseRouter from "../routes";


const CustomLayout = (props) => {

    return (
        <Layout>
            <BaseRouter/>
        </Layout>
    )

};

export default CustomLayout



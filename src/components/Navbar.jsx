import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {MenuOutlined, FundOutlined, BulbOutlined, MoneyCollectOutlined, HomeOutlined} from '@ant-design/icons';
import icon from '../images/crypto.png';

function Navbar() {
    return (
        <div className="nav-container">
            <div className="logo-container"></div>
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">Crypto currencies</Link>
            </Typography.Title>
            <Menu theme="dark">
                <Menu.Title icon={<HomeOutlined />}>
                    <Link></Link>
                </Menu.Title>
            </Menu>
        </div>
    )
}

export default Navbar

import React from 'react';
import { Menu } from "antd";

const HeaderComponent: React.FC<{currentPage: number}> = ({ currentPage }) => {
    return (
        <div className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${currentPage}`]}>
                <Menu.Item key="1"><a href="/anime">Anime</a></Menu.Item>
                <Menu.Item key="2"><a href="/movie">Movie</a></Menu.Item>
                <Menu.Item key="3"><a href="/games">Games</a></Menu.Item>
            </Menu>
        </div>
    );
}

export default HeaderComponent;
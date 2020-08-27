import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import '../../styles/Header.less';

const { Header } = Layout;

export const HeaderComponent = (props: any): JSX.Element => {
  return (
      <Header className="layout-header">
          <Row justify="center">
              <Col span={6}>
                <img src="https://via.placeholder.com/278x64" alt="logo" className="header-logo" />
              </Col>
              <Col span={4} offset={12}>
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.currentLocation]} style={{ float: 'right'}}>
                      <Menu.Item key="/dashboard"><Link to='/dashboard'>Brasil</Link></Menu.Item>
                      <Menu.Item key="/global"><Link to='/global'>Mundo</Link></Menu.Item>
                      <Menu.Item key="/about"><Link to='/about'>Sobre</Link></Menu.Item>
                  </Menu>
              </Col>
          </Row>
      </Header>
  );
};

export default HeaderComponent;

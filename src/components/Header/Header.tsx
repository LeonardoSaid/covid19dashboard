import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;


export const HeaderComponent = (props: any): JSX.Element => {

    const currentLocation = (props.currentLocation === "/")
    ? "/dashboard"
    : props.currentLocation;

  return (
      <Header className="layout-header">
          <Row justify="center">
              <Col span={6}>
                <div className="header-logo" /><span className="header-title">Dashboard</span>
              </Col>
              <Col span={4} offset={12}>
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentLocation]} style={{ float: 'right'}}>
                      <Menu.Item key="/dashboard"><Link to='/dashboard'><span className="header-link">BRASIL</span></Link></Menu.Item>
                      <Menu.Item key="/global"><Link to='/global'><span className="header-link">MUNDO</span></Link></Menu.Item>
                      <Menu.Item key="/about"><Link to='/about'><span className="header-link">SOBRE</span></Link></Menu.Item>
                  </Menu>
              </Col>
          </Row>
      </Header>
  );
};

export default HeaderComponent;

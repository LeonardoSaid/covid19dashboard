import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import './Header.less';

const { Header } = Layout;


export const HeaderComponent = (props: any): JSX.Element => {

    const currentLocation = (props.currentLocation === "/")
    ? "/dashboard"
    : props.currentLocation;

  return (
      <Header className="layout-header">
          <Row justify="space-between">
              <Col xxl={2} xl={0}></Col>
              <Col xxl={10} xl={11}>
                <div className="header-logo" /><span className="header-title">Dashboard</span>
              </Col>
              <Col xxl={10} xl={11}>
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentLocation]} style={{ float: 'right'}}>
                      <Menu.Item key="/dashboard"><Link to='/dashboard'><span className="header-link">BRASIL</span></Link></Menu.Item>
                      <Menu.Item key="/global"><Link to='/global'><span className="header-link">MUNDO</span></Link></Menu.Item>
                      <Menu.Item key="/about"><Link to='/about'><span className="header-link">SOBRE</span></Link></Menu.Item>
                  </Menu>
              </Col>
              <Col xxl={2} xl={0}></Col>
          </Row>
      </Header>
  );
};

export default HeaderComponent;

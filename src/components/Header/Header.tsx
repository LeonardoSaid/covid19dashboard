import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import '../../styles/Header.less';

const { Header } = Layout;

export const HeaderComponent = (): JSX.Element => {
  return (
      <Header className="layout-header">
          <Row justify="center">
              <Col span={6}>
                <img src="https://via.placeholder.com/278x64" alt="logo" className="header-logo" />
              </Col>
              <Col span={4} offset={12}>
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ float: 'right'}}>
                      <Menu.Item key="1">Painel Geral</Menu.Item>
                      <Menu.Item key="2">Mundo</Menu.Item>
                      <Menu.Item key="3">Sobre</Menu.Item>
                  </Menu>
              </Col>
          </Row>
      </Header>
  );
};

export default HeaderComponent;

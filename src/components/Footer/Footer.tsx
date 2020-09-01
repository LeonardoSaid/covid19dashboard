import React from 'react';
import { Layout, Divider } from 'antd';

const { Footer } = Layout;

export const FooterComponent = (): JSX.Element => {
  return (
    <Footer className="layout-footer">
        <span style={{ color: '#fff' }}>
            Licensed under ???
            <Divider type="vertical" />
            <a href="github.com">Leonardo Said</a>
        </span>
    </Footer>
  );
};

export default FooterComponent;

import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterComponent = (): JSX.Element => {
  return (
    <Footer className="layout-footer">
        Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};

export default FooterComponent;

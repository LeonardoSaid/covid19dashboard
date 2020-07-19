import React from 'react';
import { Layout } from 'antd';
import '../../styles/Footer.less';

const { Footer } = Layout;

export const FooterComponent = (): JSX.Element => {
  return (
    <Footer className="layout-footer">
        COVID19 Dashboard | Leonardo Said
    </Footer>
  );
};

export default FooterComponent;

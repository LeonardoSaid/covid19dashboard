import React from 'react';
import { Switch, Route, Router } from "react-router-dom";
import { history } from '../../utils/history';
import { Row, Col, Layout } from 'antd';
import { Dashboard, NotFound, About, Global } from '../index';
import { Header, Footer } from '../../components';
import '../../styles/App.less';

const { Content } = Layout;

export const App = (): JSX.Element => {
  return (
    <Router history={history}>
      <Layout className="layout-main">
        <Header />
        <Content className="layout-content">
          <Row justify="center">
            <Col span={18}>
              <div className="content-wrapper">
                <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/dashboard' component={Dashboard} />
                  <Route path='/global' component={Global} />
                  <Route path='/about' component={About} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;

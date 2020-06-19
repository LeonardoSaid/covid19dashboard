import React from 'react';
import { Switch, Route, Router } from "react-router-dom";
import { history } from '../../utils/history';
import { Layout } from 'antd';
import { Dashboard, NotFound, About } from '../index';
import { Header, Footer } from '../../components';
import '../../styles/App.less';

const { Content } = Layout;

export const App = (): JSX.Element => {
  return (
    <Router history={history}>
      <Layout className="layout-main">
        <Header />
        <Content className="layout-content">
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;

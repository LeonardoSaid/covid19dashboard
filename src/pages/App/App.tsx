import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Router } from "react-router-dom";
import { history } from '../../utils/history';
import { Row, Col, Layout } from 'antd';
import { Dashboard, NotFound, About, Global } from '../index';
import { Header, Footer } from '../../components';
import { loadBrazilConfirmed, loadBrazilRecovered, loadBrazilDeaths } from '../../store/effects';
import './App.less';

const { Content } = Layout;

interface AppProps {
  loadBrazilConfirmed(): void,
  loadBrazilRecovered(): void,
  loadBrazilDeaths(): void
}

export const App: React.SFC<AppProps> = (props) => {

  useEffect(() => {
    props.loadBrazilConfirmed();
    props.loadBrazilRecovered();
    props.loadBrazilDeaths();
  }, []);

  return (
    <Router history={history}>
      <Layout className="layout-main">
        <Header currentLocation={history.location.pathname} />
        <Content className="layout-content">
          <Row justify="center">
            <Col xxl={18} xl={22}>
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

const mapDispatchToProps = { loadBrazilConfirmed, loadBrazilRecovered, loadBrazilDeaths }

export default connect (
  null,
  mapDispatchToProps
)(App);

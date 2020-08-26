import React from 'react';
import { Card, Row, Col, Statistic, Skeleton } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
//import { loadUsers } from '../../store/effects';
//import { connect } from 'react-redux';

export const Dashboard = (props: any): JSX.Element => {
    
    // useEffect( () => {
    //     try {
    //         props.loadUsers();
    //     } catch (e) {

    //     }
    // },[]);

    return (
        <React.Fragment>
            <Row gutter={16}>
                <Col span={8}>
                    <Card bordered>
                        <Statistic
                            title="Casos confirmados"
                            //value={props.users && props.users.TotalConfirmed}
                            value={0}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix=""
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered>
                        <Statistic
                            title="Óbitos"
                            //value={props.users && props.users.TotalDeaths}
                            value={0}
                            precision={0}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined  />}
                            suffix=""
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered>
                        <Statistic
                            title="Casos recuperados"
                            //value={props.users && props.users.TotalRecovered}
                            value={0}
                            precision={0}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined  />}
                            suffix=""
                        />
                    </Card>
                </Col>
            </Row>
        
            <Card style={{ marginTop: '2rem' }}>
                <Skeleton paragraph={{ rows: 16 }} active />
            </Card>
        </React.Fragment>
    );
};

// const mapStateToProps = (state: any) => ({
//     users: state.users.Global
// });

// const mapDispatchToProps = { loadUsers }

// export default connect (
//     mapStateToProps,
//     mapDispatchToProps
// )(Dashboard);

export default Dashboard;
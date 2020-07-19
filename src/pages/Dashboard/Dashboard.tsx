import React from 'react';
import { Button, Card, Row, Col, Statistic, Skeleton } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export const Dashboard = (props: any): JSX.Element => {
    return (
        <React.Fragment>
            <Row gutter={16}>
                <Col span={8}>
                    <Card bordered>
                        <Statistic
                            title="Casos confirmados"
                            value={750000}
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
                            value={40500}
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
                            value={150000}
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

export default Dashboard;
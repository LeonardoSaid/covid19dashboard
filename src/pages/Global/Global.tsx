import React from 'react';
import { Card, Row, Col, Statistic, Skeleton } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export const Global = (props: any): JSX.Element => {
    return (
        <React.Fragment>
            <Row gutter={16}>
                <Col span={8}>
                    <Card bordered>
                        <Statistic
                            title="Casos confirmados mundial"
                            value={999999999}
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
                <p>a outra api permite até montar charts desde day one</p>
                <p>mapa com bandeiras, mapa geo algo assim maybe</p>
                <p>talvez bar chart com os 20 ou something piores países</p>
            </Card>
        </React.Fragment>
    );
};

export default Global;
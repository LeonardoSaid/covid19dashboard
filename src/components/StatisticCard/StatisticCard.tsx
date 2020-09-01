import React from 'react';
import { Card, Statistic, Row, Col, Avatar } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, ExceptionOutlined, MedicineBoxOutlined, ExperimentOutlined, PercentageOutlined } from '@ant-design/icons';

const titles = ['Confirmados', 'Óbitos', 'Recuperados', 'Letalidade']
const avatarIcons = [<ExceptionOutlined />, <MedicineBoxOutlined />, <ExperimentOutlined />, <PercentageOutlined />]
const avatarColors = ['#ff006e', '#fb5607', '#02c39a', '#3a86ff']

export const StatisticCard = (props: any) => {
    return (
        <Card bordered>
            <Row justify="space-between">
                <Col>
                    <Statistic
                        title={<span className="stats-title">{titles[props.type]}</span>}
                        //value={props.users && props.users.TotalConfirmed}
                        value={Math.random() * 100000}
                        precision={0}
                        valueStyle={{ color: '#303030' }}
                    />
                </Col>
                <Col>
                    <Avatar size={48} icon={avatarIcons[props.type]} style={{ backgroundColor: avatarColors[props.type] }} />
                </Col>
            </Row>

            <Row justify="start" style={{ marginTop: '1rem' }}>
                <Col><span ><ArrowUpOutlined /> +15% since last month</span></Col>
            </Row>
        </Card>
    );
}

export default StatisticCard;
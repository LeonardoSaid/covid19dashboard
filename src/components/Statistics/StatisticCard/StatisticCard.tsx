import React from 'react';
import { Card, Statistic, Row, Col, Avatar } from 'antd';
import './StatisticCard.less';

interface StatisticCardProps {
    title: string,
    value: number,
    precision: number,
    suffix?: string,
    avatarIcon: JSX.Element,
    avatarColor: string,
    extra?: JSX.Element | null,
    loading: boolean
}

export const  StatisticCard: React.SFC<StatisticCardProps> = (props) => {
    return (
        <Card bordered loading={props.loading} style={{ height: '100%' }}>
            <Row justify="space-between">
                <Col>
                    <Statistic
                        title={<span className="stats-title">{props.title}</span>}
                        value={props.value}
                        precision={props.precision}
                        suffix={props.suffix || ""}
                        valueStyle={{ color: '#303030' }}
                        groupSeparator="."
                        decimalSeparator=","
                    />
                </Col>
                <Col>
                    <Avatar size={48} icon={props.avatarIcon} style={{ backgroundColor: props.avatarColor }} />
                </Col>
            </Row>

            <Row justify="start" style={{ marginTop: '1rem' }}><Col>{props.extra}</Col></Row>
        </Card>
    );
}

export default StatisticCard;
import React from 'react';
import { Card, Statistic, Row, Col, Avatar, Skeleton } from 'antd';
import './StatisticCard.less';

export const StatisticCard = (props: any) => {
    return (
        <Card bordered loading={props.loading}>
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
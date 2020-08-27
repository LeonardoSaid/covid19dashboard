import React from 'react';
import { Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

//to-do here: set up some presets for the cards: confirmed, deaths, recovered and lethal rate

export const StatisticCard = (props: any) => {
    return (
        <Card bordered>
            <Statistic
                title="card"
                //value={props.users && props.users.TotalConfirmed}
                value={0}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix=""
            />
        </Card>
    );
}

export default StatisticCard;
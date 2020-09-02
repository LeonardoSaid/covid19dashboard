import React from 'react';
import { Card, Row, Col } from 'antd';
import { BarChart, StateTable, PieChart, StateSearch, StatisticCard } from '../../components/index';

export const Global = (props: any): JSX.Element => {
    return (
        <>
            <Row gutter={16}>
                <Col span={6}><StatisticCard type={0} loading={true} data={[]} /></Col>
                <Col span={6}><StatisticCard type={1} loading={true} data={[]} /></Col>
                <Col span={6}><StatisticCard type={2} loading={true} data={[]} /></Col>
                <Col span={6}><StatisticCard type={3} loading={true} data={[]} /></Col>
            </Row>
        
            <Card style={{ marginTop: '2rem' }}>
                <p>geo chart, clica nele carrega outro widget abaixo com info e bandeira</p>
                <p>segunda aba ou info side by side com coluna q mostra um linechart desde day one</p>
                <p>terceiro widget com bar chart dos piores países e maybe flag table something</p>
            </Card>
        </>
    );
};

export default Global;
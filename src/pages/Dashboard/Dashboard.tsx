import React from 'react';
import { Card, Row, Col, Tabs } from 'antd';
import { BarChart, StateTable, PieChart, StateSearch, StatisticGroupBrazil } from '../../components/index';
import { summary } from '../../mock/brazilapi';
import { data as pieData } from '../../mock/nivo/pie';

const { TabPane } = Tabs;

export const Dashboard = (props: any): JSX.Element => {

    return (
        <>
            <StatisticGroupBrazil />

            <Card style={{ marginTop: '2rem', marginBottom: '2rem' }} title="Comparação dos estados">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Gráfico" key="1">
                        <BarChart
                            data={summary.data}
                            keys={['cases', 'deaths']}
                            indexBy="uf"
                            height={window.innerHeight / 2}
                        />
                    </TabPane>

                    <TabPane tab="Tabela" key="2">
                        <StateTable />
                    </TabPane>
                </Tabs>
            </Card>

            <Row justify="space-between" gutter={16}>
                <Col span={12}>
                    <Card title="Comparação por regiões" style={{ width: '100%' }}>
                        <PieChart data={pieData} />
                    </Card>
                </Col>

                <Col span={12}>
                    <Card title="Casos em um estado por data específica" style={{ width: '100%' }}>
                        <StateSearch />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;
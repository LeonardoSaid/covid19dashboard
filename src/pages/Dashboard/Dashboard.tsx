import React from 'react';
import { Card, Row, Col, Statistic, Tabs } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { summary } from '../../mock/brazilapi';
import { ResponsiveBar } from '@nivo/bar';
import { data as barData } from '../../mock/nivo/bar';
//import { loadUsers } from '../../store/effects';
//import { connect } from 'react-redux';

const { TabPane } = Tabs;

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
                            title="coloca outro para letalidade"
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
                            prefix={<ArrowDownOutlined />}
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
                            prefix={<ArrowDownOutlined />}
                            suffix=""
                        />
                    </Card>
                </Col>
            </Row>

            <Card style={{ marginTop: '2rem' }} title="Comparação dos estados">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Gráfico" key="1">
                        <div style={{ height: '300px' }}>
                            <ResponsiveBar
                                data={barData}
                                keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                                indexBy="country"
                                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                padding={0.3}
                                colors={{ scheme: 'nivo' }}
                                defs={[
                                    {
                                        id: 'dots',
                                        type: 'patternDots',
                                        background: 'inherit',
                                        color: '#38bcb2',
                                        size: 4,
                                        padding: 1,
                                        stagger: true
                                    },
                                    {
                                        id: 'lines',
                                        type: 'patternLines',
                                        background: 'inherit',
                                        color: '#eed312',
                                        rotation: -45,
                                        lineWidth: 6,
                                        spacing: 10
                                    }
                                ]}
                                fill={[
                                    {
                                        match: {
                                            id: 'fries'
                                        },
                                        id: 'dots'
                                    },
                                    {
                                        match: {
                                            id: 'sandwich'
                                        },
                                        id: 'lines'
                                    }
                                ]}
                                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'country',
                                    legendPosition: 'middle',
                                    legendOffset: 32
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'food',
                                    legendPosition: 'middle',
                                    legendOffset: -40
                                }}
                                labelSkipWidth={12}
                                labelSkipHeight={12}
                                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                                legends={[
                                    {
                                        dataFrom: 'keys',
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 120,
                                        translateY: 0,
                                        itemsSpacing: 2,
                                        itemWidth: 100,
                                        itemHeight: 20,
                                        itemDirection: 'left-to-right',
                                        itemOpacity: 0.85,
                                        symbolSize: 20,
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                                animate={true}
                                motionStiffness={90}
                                motionDamping={15}
                            />
                        </div>
                    </TabPane>
                
                    <TabPane tab="Tabela" key="2">
                        <p>Aqui coloca uma tabela com as info</p>
                    </TabPane>
                </Tabs>
            </Card>

            <Card>
                <p>mesma informacao acima mas agrupado em um pieChart por regiões centro oeste sul etc</p>
                <p>outro com select para colocar data/estado e puxar alguma info específica</p>
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
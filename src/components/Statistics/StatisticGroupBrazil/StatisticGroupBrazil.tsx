import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { ArrowUpOutlined, ExceptionOutlined, MedicineBoxOutlined, ExperimentOutlined, PercentageOutlined } from '@ant-design/icons';
import { StatisticCard } from '../../index';

function getValue(arr: any): number {
    if (arr.length > 0)
        return arr.slice(-1)[0].Cases;
    else
        return 0;
}

const Extra = (props: {data: any}) => (
    props.data.length === 2
        ? <span><ArrowUpOutlined style={{ color: '#3f8600' }} /> {(props.data[1].Cases - props.data[0].Cases)} novos casos</span>
        : null
)

const StatisticGroupBrazil = (props: any) => {
    return (
        <Row gutter={16}>
            <Col span={6}>
                <StatisticCard
                    title="Confirmados"
                    value={getValue(props.brazilData.confirmed)}
                    precision={0}
                    avatarIcon={<ExceptionOutlined />}
                    avatarColor="#ff006e"
                    extra={<Extra data={props.brazilData.confirmed} />}
                    loading={props.loading.confirmed}
                />
            </Col>

            <Col span={6}>
                <StatisticCard
                    title="Óbitos"
                    value={getValue(props.brazilData.deaths)}
                    precision={0}
                    avatarIcon={<MedicineBoxOutlined />}
                    avatarColor="#fb5607"
                    extra={<Extra data={props.brazilData.deaths} />}
                    loading={props.loading.deaths}
                />
            </Col>

            <Col span={6}>
                <StatisticCard
                    title="Recuperados"
                    value={getValue(props.brazilData.recovered)}
                    precision={0}
                    avatarIcon={<ExperimentOutlined />}
                    avatarColor="#02c39a"
                    extra={<Extra data={props.brazilData.recovered} />}
                    loading={props.loading.recovered}
                />
            </Col>

            <Col span={6}>
                <StatisticCard
                    title="Letalidade"
                    value={getValue(props.brazilData.deaths) / getValue(props.brazilData.confirmed) * 100}
                    precision={3}
                    suffix="%"
                    avatarIcon={<PercentageOutlined />}
                    avatarColor="#3a86ff"
                    loading={props.loading.confirmed && props.loading.deaths}
                />
            </Col>
        </Row>
    );
}

const mapStateToProps = (state: any) => ({
    loading: state.loading,
    brazilData: state.brazilData
});

export default connect(
    mapStateToProps,
    null
)(StatisticGroupBrazil);
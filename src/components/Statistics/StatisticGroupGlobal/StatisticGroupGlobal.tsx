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

const StatisticGroupGlobal = (props: any) => {
    return (
       <p>global</p>
    );
}

const mapStateToProps = (state: any) => ({
    loading: state.loading,
    brazilData: state.brazilData
});

export default connect(
    mapStateToProps,
    null
)(StatisticGroupGlobal);
import React from 'react';
import { Space } from 'antd';
import { connect } from 'react-redux';
import { loadStateSearch } from '../../store/effects';
import StateSearchForm from './StateSearchForm';
import StateSearchDetails from './StateSearchDetails';

export const StateSearchContainer = (props: any) => {
    return (
        <Space direction="vertical" size="large">
            <StateSearchForm loading={props.loading} loadStateSearch={props.loadStateSearch} />
            <StateSearchDetails data={props.data} />
        </Space>
    );
}

const mapStateToProps = (state: any) => ({
    loading: state.loading.brazilData.stateSearch,
    data: state.brazilData.stateSearch
});

const mapDispatchToProps = { loadStateSearch }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StateSearchContainer);
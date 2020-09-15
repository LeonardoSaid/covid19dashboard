import React from 'react';
import { Descriptions } from 'antd';

export const StateDetails = (props: any) => {
    return (
        <Descriptions
            bordered
            title="Resultado"
            size="small"
        >
            <Descriptions.Item label="UF">uf</Descriptions.Item>
            <Descriptions.Item label="State">state</Descriptions.Item>
            <Descriptions.Item label="cases">cases</Descriptions.Item>
            <Descriptions.Item label="deaths">deaths</Descriptions.Item>
            <Descriptions.Item label="suspects">suspects</Descriptions.Item>
            <Descriptions.Item label="refuses">refuses</Descriptions.Item>
            <Descriptions.Item label="broadcast? comment?">broadcast? comment?</Descriptions.Item>
            <Descriptions.Item label="datetime">datetime</Descriptions.Item>
        </Descriptions>
    );
}

export default StateDetails;
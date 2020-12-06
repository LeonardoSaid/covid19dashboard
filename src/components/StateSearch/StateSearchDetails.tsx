import React from 'react';
import { Descriptions } from 'antd';

export const StateSearchDetails = (props: any) => {
    return (
        (props.data)
            ?
            <Descriptions
                bordered
                title="Resultado"
                size="small"
            >
                <Descriptions.Item label="UF">{props.data.uf}</Descriptions.Item>
                <Descriptions.Item label="Estado">{props.data.state}</Descriptions.Item>
                <Descriptions.Item label="Confirmados">{props.data.cases}</Descriptions.Item>
                <Descriptions.Item label="Mortes">{props.data.deaths}</Descriptions.Item>
                <Descriptions.Item label="Suspeitos">{props.data.suspects}</Descriptions.Item>
                <Descriptions.Item label="Descartados">{props.data.refuses}</Descriptions.Item>
            </Descriptions>
            :
            null
    );
}

export default StateSearchDetails;
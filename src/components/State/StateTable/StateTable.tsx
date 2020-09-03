import React from 'react';
import { Table } from 'antd';
import { summary } from '../../../mock/brazilapi';

const columns = [
    {
      title: 'Estado',
      dataIndex: 'state',
      key: 'state'
    },
    {
      title: 'UF',
      dataIndex: 'uf',
      key: 'uf'
    },
    {
      title: 'Casos Confirmados',
      dataIndex: 'cases',
      key: 'cases'
    },
    {
      title: 'Óbitos',
      dataIndex: 'deaths',
      key: 'deaths'
    },
    {
      title: 'Casos Suspeitos',
      dataIndex: 'suspects',
      key: 'suspects'
    },
    {
      title: 'Casos Descartados',
      dataIndex: 'refuses',
      key: 'refuses'
    },
    {
      title: 'Taxa Letalidade',
      key: 'lethal',
      render: (text:any, record:any) => ((record.deaths/record.cases)*100).toFixed(1)
    }
  ];

export const StateTable = () => {
    return (
        <Table columns={columns} dataSource={summary.data} />
    );
}

export default StateTable;
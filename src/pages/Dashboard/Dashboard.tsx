import React from 'react';
import { Button } from 'antd';

export const Dashboard = (props:any): JSX.Element => {
    return (
        <div>
        <Button type="primary" onClick={() => props.history.push("/qualquercoisa")}>IR PARA /QUALQEURCOISA</Button>
        </div>
    );
};

export default Dashboard;
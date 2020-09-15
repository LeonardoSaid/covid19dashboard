import React, { useState } from 'react';
import { Form, Input, Button, Space, Select } from 'antd';
import StateDetails from './StateDetails';
import { states } from '../../utils/state';

export const StateSearch = (props: any) => {

    const [form] = Form.useForm();
    const stateOptions = states.map(state => <Select.Option value={state.uf}>{state.state}</Select.Option>)

    return (
        <Space direction="vertical" size="large">
            <Form
                layout="inline"
                form={form}
            >
                <Form.Item label="Estado">
                    <Select style={{ width: 150 }}>{stateOptions}</Select>
                </Form.Item>
                <Form.Item label="Data">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>

            <StateDetails />
        </Space>
    );
}

export default StateSearch;
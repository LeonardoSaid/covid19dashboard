import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

export const StateSearch = (props: any) => {

    const [form] = Form.useForm();

    return (
        <>
            <Form
                layout="inline"
                form={form}
            >
                <Form.Item label="Estado">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Data">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>

            <p>uf, state</p>
            <p>cases</p>
            <p>deaths</p>
            <p>suspects</p>
            <p>refuses</p>
            <p>broadcast? comment?</p>
            <p>datetime</p>
        </>
    );
}

export default StateSearch;
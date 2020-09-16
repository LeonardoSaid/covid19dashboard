import React from 'react';
import { Form, Button, Select, DatePicker } from 'antd';
import moment from 'moment';
import { states } from '../../utils/state';

export const StateSearchForm = (props: any) => {

    const [form] = Form.useForm();
    const stateOptions = states.map(state => <Select.Option value={state.uf}>{state.state}</Select.Option>)

    const onFinish = (values: any) => {
        //console.log(values.uf, moment(values.date).format('YYYYMMDD'));
        props.loadStateSearch(values.uf, moment(values.date).format('YYYYMMDD'));
    };

    // const onReset = () => {
    //     form.resetFields();
    // };

    return (
        <Form
            layout="inline"
            form={form}
            onFinish={onFinish}
        >
            <Form.Item name="uf" label="Estado" rules={[{ required: true, message: "Campo Obrigatório" }]}>
                <Select style={{ width: 150 }}>{stateOptions}</Select>
            </Form.Item>
            <Form.Item name="date" label="Data" rules={[{ required: true, message: "Campo Obrigatório" }]}>
                <DatePicker placeholder="" format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={props.loading}>Procurar</Button>
            </Form.Item>
        </Form>
    );
}

export default StateSearchForm;
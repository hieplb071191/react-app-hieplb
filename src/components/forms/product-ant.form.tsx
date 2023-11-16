import { Button, DatePicker, Form, Input } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import ProductDetailAntForm from './product-detail-ant.form';

const initialValues = {
	username: 'lehiep',
	email: 'lehiep@gmail.com',
	password: '12345678',
	confirmPassword: '12345678',
	dob: null,
};

export default function ProductAntForm() {
	const [form] = Form.useForm();
	const [initValues, setInitValues] = useState<any>({
		username: 'lehiep',
		email: 'lehiep@gmail.com',
		password: '12345678',
		confirmPassword: '12345678',
		dob: moment('2023-01-01'),
		details: [{ color: 'gray', quantity: 0, size: 'XLM', price: 100 }],
	});

	const onFinish = (event: any) => {
		console.log(event);
	};
	return (
		<>
			<div className="w-1/3 m-auto">
				<Form form={form} initialValues={initValues} onFinish={onFinish}>
					<Form.Item name={'username'}>
						<Input />
					</Form.Item>
					<Form.Item name={'email'}>
						<Input />
					</Form.Item>
					<Form.Item name={'password'}>
						<Input type="password" />
					</Form.Item>
					<Form.Item name={'confirmPassword'}>
						<Input type="password" />
					</Form.Item>
					<Form.Item name={'dob'}>
						<DatePicker format={'DD-MM-YYYY'} className="w-full" />
					</Form.Item>
					<ProductDetailAntForm />
					<Button type="default" htmlType="submit">
						submit
					</Button>
				</Form>
			</div>
		</>
	);
}

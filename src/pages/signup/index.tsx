import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '@/styles/scss/Login.module.scss';
import * as Yup from 'yup';
import { Button, Card, DatePicker, Form, Input, Typography } from 'antd';
import { AnyObject, ObjectSchema } from 'yup';
import moment from 'moment';
import GoogleAutoCompleteAddress from '@/components/inputs/GoogleAutocompleteAddress';
import { httpPostRequest } from '@/api/call-api';

export type IFormSignup = {
	email: String;
	username: String;
	password: String;
	dob?: Date;
	address: {
		lat: number;
		long: number;
	};
	isTwoFa?: Boolean;
	loginSystem?: String;
};

export const yupValidator = <T extends AnyObject>(schema: ObjectSchema<T>, getFieldsValue: () => T) => ({
	async validator({ field }: any) {
		await schema.validateSyncAt(field, getFieldsValue());
	},
});

const Signup = () => {
	const router = useRouter();
	const { token } = useSelector((state: any) => state.token);
	const [password, setPassword] = useState('');
	useEffect(() => {
		if (token) {
			router.replace('/');
		}
	}, [token]);

	const [form] = Form.useForm();
	const [address, setAddress] = useState<any>(null);

	const validationSchema = Yup.object({
		email: Yup.string()
			.required('Email is required')
			.matches(/\S+@\S+\.\S+/g, 'Email not correct format')
			.max(50, 'max length email is 50 characters'),
		username: Yup.string().required('Username is required').max(50, 'max length email is 50 characters'),
		password: Yup.string().required().min(8).max(20),
		confirmPassword: Yup.string()
			.required()
			.test('comparePassword', 'not correct', (value) => {
				return value === password;
			}),

		dob: Yup.date().test((value): boolean => {
			return moment().isAfter(moment(value));
		}),
	});

	const yupSync = {
		async validator({ field }: any, value: any) {
			await validationSchema.validateSyncAt(field, { [field]: value });
		},
	};

	const submitForm = async (data: IFormSignup) => {
		data.address = address;
		const body: any = { ...data };
		if (data.dob) {
			body['dob'] = moment(data.dob).format('YYYY-MM-DD');
		}
		const res = await httpPostRequest('/auth/signup', data);
		if (res) {
			console.log(res);
		}
	};

	return (
		<>
			<div className={styles.login}>
				<Form name="signup-form" form={form} onFinish={submitForm}>
					<Card title={'SIGNUP FORM'} bordered={true}>
						<div>
							<Typography.Title title="Email" level={5}>
								Email
							</Typography.Title>
							<Form.Item name={'email'} rules={[yupSync]}>
								<Input />
							</Form.Item>
						</div>
						<div>
							<Typography.Title title="User name" level={5}>
								User name
							</Typography.Title>
							<Form.Item name={'username'} rules={[yupSync]}>
								<Input />
							</Form.Item>
						</div>
						<div>
							<Typography.Title title="User name" level={5}>
								password
							</Typography.Title>
							<Form.Item name={'password'} rules={[yupSync]}>
								<Input onChange={(value) => setPassword(value?.target?.value)} />
							</Form.Item>
						</div>
						<div>
							<Typography.Title title="User name" level={5}>
								confirmPassword
							</Typography.Title>
							<Form.Item name={'confirmPassword'} rules={[yupSync]}>
								<Input />
							</Form.Item>
						</div>
						<div>
							<Typography.Title title="User name" level={5}>
								date of birth
							</Typography.Title>
							<Form.Item name={'dob'} rules={[yupSync]}>
								<DatePicker
									name="dob"
									style={{ width: '100%' }}
									format={'DD/MM/YYYY'}
									onChange={form.getFieldsValue}
								></DatePicker>
							</Form.Item>
						</div>
						<div>
							<Typography.Title title="User name" level={5}>
								address
							</Typography.Title>
							<Form.Item>
								<GoogleAutoCompleteAddress address={address} setAddress={setAddress}></GoogleAutoCompleteAddress>
							</Form.Item>
						</div>
						<Button
							type="default"
							htmlType="submit"
							style={{ width: '120px', fontWeight: '600', background: '#198754', color: '#ffffff' }}
						>
							Submit
						</Button>
					</Card>
				</Form>
			</div>
		</>
	);
};

export default Signup;

import { Button, Form, Input } from 'antd';

export default function ProductDetailAntForm() {
	return (
		<>
			<Form.List name={'details'}>
				{(fields, { add, remove }) => {
					return (
						<div>
							{fields.map((item, index) => (
								<div key={index}>
									<Form.Item name={[index, 'color']}>
										<Input />
									</Form.Item>
									<Form.Item name={[index, 'quantity']}>
										<Input type={'number'} />
									</Form.Item>
									<Form.Item name={[index, 'size']}>
										<Input />
									</Form.Item>
									<Form.Item name={[index, 'price']}>
										<Input type={'number'} />
									</Form.Item>
									<Button
										onClick={() => {
											remove(index);
										}}
									>
										removeDetail
									</Button>
								</div>
							))}
							<Button onClick={add}> Add detail </Button>
						</div>
					);
				}}
			</Form.List>
		</>
	);
}

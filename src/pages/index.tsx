import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Col, Row, Typography } from 'antd';
import HomeCaurosel from '@/components/caurosel/homeCaurosel';

const inter = Inter({ subsets: ['latin'] });
const style = {
	width: '100%',
	height: '200px',
	background: 'skyblue',
	padding: '5px',
};
export default function Home() {
	const images: string[] = [
		'https://bizweb.dktcdn.net/100/484/026/themes/905419/assets/slider_1.jpg?1694771698153',
		'https://bizweb.dktcdn.net/100/484/026/themes/905419/assets/slider_2.jpg?1694771698153',
	];
	return (
		<>
			<HomeCaurosel
				images={images}
				handleNavigate={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
			<main className="container">
				<div className="w-full flex justify-center">
					<Typography.Title title="Demo Page View" level={1}>
						Demo Page View
					</Typography.Title>
				</div>
				<Row style={{ display: 'flex' }}>
					<Col className="gutter-row" xs={24} lg={8}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
					<Col className="gutter-row" xs={24} lg={16}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
				</Row>
				<Row style={{ display: 'flex' }}>
					<Col className="gutter-row" xs={24} lg={8}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
					<Col className="gutter-row" xs={24} lg={16}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
				</Row>
				<Row style={{ display: 'flex' }}>
					<Col className="gutter-row" xs={24} lg={8}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
					<Col className="gutter-row" xs={24} lg={16}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
				</Row>
				<Row style={{ display: 'flex' }}>
					<Col className="gutter-row" xs={24} lg={8}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
					<Col className="gutter-row" xs={24} lg={16}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
				</Row>
				<Row style={{ display: 'flex' }}>
					<Col className="gutter-row" xs={24} lg={8}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
					<Col className="gutter-row" xs={24} lg={16}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
				</Row>
				<Row style={{ display: 'flex' }}>
					<Col className="gutter-row" xs={24} lg={8}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
					<Col className="gutter-row" xs={24} lg={16}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
				</Row>
				<Row style={{ display: 'flex' }}>
					<Col className="gutter-row" xs={24} lg={8}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
					<Col className="gutter-row" xs={24} lg={16}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
				</Row>
				<Row style={{ display: 'flex' }}>
					<Col className="gutter-row" xs={24} lg={8}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
					<Col className="gutter-row" xs={24} lg={16}>
						<div style={style}>
							<div style={{ background: '#333333', width: '100%', height: '100%' }}></div>
						</div>
					</Col>
				</Row>
			</main>
		</>
	);
}

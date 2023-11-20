import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import style from '../../styles/scss/anomation.module.scss';
import { useState } from 'react';

interface SearchHeaderModalProps {
	isShow: Boolean;
	handleComplete: (e: any) => void;
	handleCancel: (params: boolean) => void;
}

const SearchModal = (props: SearchHeaderModalProps) => {
	const { isShow } = props;
	const className = `absolute top-0 ${style.animation}`;
	const [changeInput, setChangeInput] = useState('');
	return (
		isShow && (
			<div style={{ width: '100%', height: '100vh' }} className={className}>
				<div className="flex ml:justify-center lg:justify-between items-center bg-white py-5 px-5">
					<div style={{ width: '134px', height: '45px', cursor: 'pointer' }} className="ml:hidden lg:flex">
						<img src="https://bizweb.dktcdn.net/100/484/026/themes/905419/assets/logo.png?1694771698153" />
					</div>
					<div className="relative w-[650px]">
						<input
							type="text"
							style={{
								border: '1px solid black',
								height: '40px',
								width: '100%',
								outline: 'none',
								borderRadius: '20px',
								paddingLeft: '15px',
								paddingRight: '70px',
							}}
							onChange={(event) => setChangeInput(event.target.value)}
						/>
						<div
							style={{ height: '35px', width: '60px', borderRadius: '17px' }}
							className="flex justify-center items-center absolute top-[2.5px] right-[2.5px] bg-black w-[50px] cursor-pointer"
							onClick={() => props.handleComplete(changeInput)}
						>
							<SearchOutlined className="top-0 right-0" style={{ fontSize: '20px', color: '#ffffff' }} />
						</div>
						<div className="flex justify-start gap-2">
							<a href="#" style={{ fontSize: '12px', color: '#6c757d' }}>
								Áo Tập
							</a>
							<a href="#" style={{ fontSize: '12px', color: '#6c757d' }}>
								Yoga
							</a>
							<a href="#" style={{ fontSize: '12px', color: '#6c757d' }}>
								Quần legging
							</a>
							<a href="#" style={{ fontSize: '12px', color: '#6c757d' }}>
								Sét đồ tập
							</a>
						</div>
					</div>
					<div className="ml:hidden lg:flex justify-end gap-3">
						<SearchOutlined
							className="top-0 right-0"
							style={{ fontSize: '25px', color: '#333333' }}
							onClick={() => props.handleCancel(false)}
						/>
						<ShoppingCartOutlined className="top-0 right-0" style={{ fontSize: '25px', color: '#333333' }} />
						<UserOutlined className="top-0 right-0" style={{ fontSize: '25px', color: '#333333' }} />
					</div>
				</div>
				<div className="bg-black opacity-40" style={{ width: '100%', height: '100vh' }}></div>
			</div>
		)
	);
};

export default SearchModal;

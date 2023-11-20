import { setToken } from '@/redux/slices/token.slice';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import navMenuData from '@/routers/data.router';
import { Col, Dropdown, MenuProps, Row } from 'antd';
import {
	DownOutlined,
	LeftOutlined,
	RightOutlined,
	UserOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons';
import * as _ from 'lodash';
import SearchModal from '../modals/HeaderSearch.modal';

const RenderPcHeader = ({ page = 1 }) => {
	const [showSuperItem, setShowSuperItem] = useState(false);
	const [navMenu, setNavMenu] = useState(navMenuData);
	useEffect(() => {
		const navItemElement = window.document.getElementById('nav-menu-items');
		console.log('navitem', navItemElement?.clientWidth);
		const width: number = navItemElement?.clientWidth ? navItemElement?.clientWidth : 0;
		const itemLength = Math.floor(width / 150);

		if (page === 1) {
			const navArr = _.cloneDeep(navMenuData);
			setNavMenu(navArr.slice(0, itemLength));
		} else if (page === 2) {
			const navArr = _.cloneDeep(navMenuData);
			setNavMenu(navArr.slice(itemLength));
		}
	}, [window.screen.width, page]);
	return (
		<div className="ml:hidden lg:flex exxl:w-[1200px] xls:w-[800px] xl:w-[650px] lg:w-[600px]" id={'nav-menu-items'}>
			{navMenu.map((item, index) => {
				if (item.childMenu && item.childMenu.isSuper) {
					return (
						<button
							key={index}
							style={{ width: '145px', height: '65px' }}
							onMouseMove={() => setShowSuperItem(true)}
							onMouseLeave={() => setShowSuperItem(false)}
							onClick={() => setShowSuperItem(!showSuperItem)}
						>
							<span>
								{item.label} &nbsp; <DownOutlined />
							</span>
							{showSuperItem && (
								<div
									className="absolute z-20 pt-5"
									style={{
										width: '100vw',
										padding: '20px',
										background: '#ffffff',
										top: '60px',
										left: '0',
										boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.4)',
									}}
								>
									<Row className="container">
										{item.childMenu?.superItems?.map((itemMenu, indexMenu) => {
											return (
												<Col span={6} className="flex flex-col items-start gap-2" key={indexMenu}>
													<span className="font-bold text-base mb-5 uppercase"> {itemMenu.label}</span>
													{itemMenu.childItems?.map((itemChildMenu, indexChildMenu) => (
														<a className="text-base" key={indexChildMenu}>
															{itemChildMenu.label}
														</a>
													))}
												</Col>
											);
										})}
									</Row>
								</div>
							)}
						</button>
					);
				} else if (item.childMenu && !item.childMenu.isSuper) {
					const items: MenuProps['items'] = item.childMenu.items as MenuProps['items'];
					return (
						<Dropdown
							key={index}
							menu={{
								items,
								onClick: (e) => console.log(e),
							}}
							onOpenChange={(e) => console.log(e)}
						>
							<button style={{ width: '145px', height: '65px' }}>
								{item.label} &nbsp;
								<DownOutlined />
							</button>
						</Dropdown>
					);
				} else {
					return (
						<button style={{ width: '145px', height: '65px' }} key={index}>
							{item.label} &nbsp;
						</button>
					);
				}
			})}
		</div>
	);
};

export const Navbar = () => {
	const token = useSelector((state: any) => state.token);
	const router = useRouter();
	const dispatch = useDispatch();
	const [isScroll, setIsCroll] = useState(false);
	const [page, setPage] = useState(1);
	const [leftClassArraw, setLeftClassArrow] = useState({});
	const [rightClassArraw, setRightClassArrow] = useState({});
	const [showSearchModal, setShowSearchModal] = useState(false);
	console.log(token);
	const isLogin = useMemo(() => {
		console.log(!!token.token);
		return !!token.token;
	}, [token]);
	const handleLogout = () => {
		dispatch(setToken(''));
	};

	useEffect(() => {
		if (page === 1) {
			setLeftClassArrow({ cursor: 'not-allowed', color: 'gray' });
			setRightClassArrow({ cursor: 'pointer', color: 'black' });
		} else if (page === 2) {
			setLeftClassArrow({ cursor: 'pointer', color: 'black' });
			setRightClassArrow({ cursor: 'not-allowed', color: 'gray' });
		}
	}, [page]);

	console.log('scroll', window.scrollY);

	useEffect(() => {
		return window.addEventListener('scroll', () => {
			if (window.scrollY !== 0) {
				setIsCroll(true);
			} else {
				setIsCroll(false);
			}
		});
	}, []);

	console.log(window.screen.width);

	const getPropHeader = (isLogin: any) => {
		return (
			<>
				{/* <span style={{ cursor: 'pointer' }} onClick={() => router.replace('/')}>
					Home
				</span>
				<span style={{ cursor: 'pointer' }}>About</span>
				{isLogin ? (
					<span onClick={handleLogout} style={{ cursor: 'pointer' }}>
						<UserOutlined />
					</span>
				) : (
					<span style={{ cursor: 'pointer' }} onClick={() => router.replace('/login')}>
						Login
					</span>
				)}
				{isLogin ? (
					<></>
				) : (
					<span style={{ cursor: 'pointer' }} onClick={() => router.replace('/signup')}>
						Signup
					</span>
				)} */}
				<SearchOutlined style={{ fontSize: '25px' }} onClick={() => setShowSearchModal(true)} />
				<UserOutlined style={{ fontSize: '25px' }} />
				<ShoppingCartOutlined style={{ fontSize: '25px' }} />
			</>
		);
	};
	return (
		<header
			className="w-full h-[65px] sticky z-10 bg-white mb-[20px] top-0"
			style={isScroll ? { boxShadow: '0 0px 5px 1px rgba(0, 0, 0, 0.4)' } : {}}
		>
			{/* display full pc */}
			<div className="container h-[65px]  flex justify-between items-center gap-3 px-[15px]">
				<div style={{ width: '134px', height: '45px', cursor: 'pointer' }} onClick={() => router.replace('/')}>
					<img src="https://bizweb.dktcdn.net/100/484/026/themes/905419/assets/logo.png?1694771698153" />
				</div>
				<RenderPcHeader page={page} />
				<div style={{ width: '80px' }} className="flex gap-3">
					<LeftOutlined onClick={() => setPage(1)} style={leftClassArraw} />
					<RightOutlined onClick={() => setPage(2)} style={rightClassArraw} />
				</div>
				<div className="flex justify-center gap-4">{getPropHeader(isLogin)}</div>
			</div>
			<SearchModal
				isShow={showSearchModal}
				handleComplete={function (e: any): void {
					console.log(e);
				}}
				handleCancel={function (params: boolean): void {
					setShowSearchModal(params);
				}}
			/>
		</header>
	);
};

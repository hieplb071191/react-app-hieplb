import { setToken } from '@/redux/slices/token.slice';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../../public/my-logo/—Pngtree—red wolf logo for game_5518165.png';
import { useRouter } from 'next/router';

export const Navbar = () => {
	const token = useSelector((state: any) => state.token);
	const router = useRouter();
	const dispatch = useDispatch();
	console.log(token);
	const isLogin = useMemo(() => {
		console.log(!!token.token);
		return !!token.token;
	}, [token]);
	const handleLogout = () => {
		dispatch(setToken(''));
	};

	const getPropHeader = (isLogin: any) => {
		return (
			<>
				<span style={{ cursor: 'pointer' }} onClick={() => router.replace('/')}>
					Home
				</span>
				<span style={{ cursor: 'pointer' }}>About</span>
				{isLogin ? (
					<span onClick={handleLogout} style={{ cursor: 'pointer' }}>
						Logout
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
				)}
			</>
		);
	};
	return (
		<header className="w-full h-[100px]">
			<div className="w-full h-[100px] bg-[#ffffff] relative">
				<section className="max-w-[1140px] h-[100px] m-auto overflow-auto xl:flex lg:hidden ml:hidden justify-between ">
					<div className="flex justify-between items-center  mr-[25px]">
						<img src={Logo.src} width={70} />
					</div>
					<div className="max-w-[1140px] h-[100px] flex justify-between items-center text-black gap-20">
						{getPropHeader(isLogin)}
					</div>
					<div className="flex justify-between items-center text-5xl ml-[25px] text-black">
						<img src={Logo.src} width={70} />
					</div>
				</section>
				<section className="ml:hidden xml:flex lg:flex xl:hidden justify-between">
					<div className="ml-[20px] h-[100px] flex justify-between items-center text-5xl text-black">LOGO</div>
					<div className="mr-[20px] h-[100px] flex justify-between items-center text-5xl text-black">Menu</div>
				</section>
				{/* <section className="w-[1140px] h-[140px] absolute bg-[#19e67f] left-1/2 -translate-x-1/2 rounded-md"></section> */}
			</div>
		</header>
	);
};

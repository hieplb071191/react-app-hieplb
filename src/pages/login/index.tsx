import { loginThunk, loginWithGoogleThunk } from '@/redux/thunks/token.thunk';
import { CredentialResponse, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '@/components/layouts/layout';

interface IFormValues {
	email: string;
	username: string;
	password: string;
}

function Login() {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
	const token = useSelector((state: any) => state.token);
	const router = useRouter();
	useEffect(() => {
		if (token.token) {
			router.replace('/');
		}
	}, [token]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			username: '',
			password: '',
		},
		resolver: undefined,
		context: undefined,
		criteriaMode: 'all',
		shouldFocusError: true,
		shouldUnregister: false,
		shouldUseNativeValidation: false,
		delayError: undefined,
	});

	const onSubmit = (data: any) => {
		dispatch(loginThunk(data));
	};

	const onsuccessGoogle = (params: any) => {
		dispatch(loginWithGoogleThunk(params)).catch((e) => {
			console.log(e);
		});
	};

	const loginGoogle = useGoogleLogin({
		onSuccess: (params) => onsuccessGoogle(params),
	});
	return (
		<div className="px-5 md:px-0">
			<div className="w-w-full md:w-1/2 m-auto p-3 border-2 rounded-xxl mt-10">
				<section className="flex justify-center font-bold text-3xl mx-8 my-8">
					<span>Trang đăng nhập</span>
				</section>
				<section className="flex justify-center">
					<form onSubmit={handleSubmit(onSubmit)} className="flex justify-center w-full">
						<div className="flex flex-col items-center gap-y-4  w-full">
							<input
								placeholder="email"
								{...register('email', { required: true })}
								className="border-solid border-2 rounded h-10  px-2 w-full"
							/>
							{errors.email && <p className="text-red-600">Email không được để trống</p>}

							<input
								type="password"
								placeholder="email"
								{...register('password', { required: true })}
								className="border-solid border-2 rounded h-10  px-2 w-full"
							/>
							{errors.password && <p className="text-red-600">Password không được để trống</p>}
							<div className="flex justify-center gap-x-7 md:items-center md:gap-y-5 md:flex-col">
								<button type="submit" className="bg-sky-300 w-28 h-10 rounded font-semibold text-slate-100">
									Submit
								</button>
								{/* <GoogleLogin onSuccess={onsuccessGoogle} /> */}
								<button type="button" onClick={() => loginGoogle()}>
									LoginGoogle
								</button>
							</div>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
}

export default Login;

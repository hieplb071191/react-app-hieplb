import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as moment from 'moment';
import { httpPostRequest } from '@/api/call-api';
import { setToken } from '@/redux/slices/token.slice';
import { setEmail } from '@/redux/slices/signup-google.slice';
import { DatePicker } from 'antd';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface IFormValues {
	email: string;
	username: string;
	dob?: Date;
	isTwoFA?: boolean;
	address?: {};
}

const containerStyle = {
	width: '400px',
	height: '400px',
};

const center = {
	lat: 20.893435916325902,
	lng: 105.7647307871195,
};

export default function SignUpWithGoogle() {
	const dispatch = useDispatch();
	const router = useRouter();
	const emailState = useSelector((state: any) => state.google);
	const email = useMemo(() => {
		return emailState.email;
	}, [emailState]);
	if (!email) {
		router.replace('/');
	}
	const [address, setAddress] = useState<any>(null);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.GOOGLE_MAP_KEY as string,
	});

	const [map, setMap] = useState(null);

	const onUnmount = useCallback(function callback(map: any) {
		setMap(null);
	}, []);

	const onLoad = useCallback(function callback(map: any) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!

		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onchangeMap = (event: google.maps.MapMouseEvent) => {
		// console.log(event);
		console.log(event);
		console.log(event.latLng?.toJSON());
		console.log(event.latLng?.toUrlValue());
		setAddress(event.latLng?.toJSON());
	};

	useEffect(() => {
		console.log(map);
	}, [map]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		defaultValues: {
			email: email,
			username: '',
			dob: undefined,
			isTwoFA: false,
		},
		resolver: undefined,
		context: undefined,
		criteriaMode: 'all',
		shouldFocusError: true,
		shouldUnregister: false,
		shouldUseNativeValidation: false,
		delayError: undefined,
	});
	const onSubmit = async (data: any) => {
		console.log(data);
		let { email, username, dob, isTwoFA } = data;
		if (dob) {
			dob = new Date(dob).toISOString();
		}
		console.log(isTwoFA);

		const body = { email, username, dob, address, isTwoFA };
		const response = await httpPostRequest('/auth/sign-with-google', body);
		if (response) {
			console.log(response);
			dispatch(setToken(response.data?.access_token));
			dispatch(setEmail(''));
		}
	};

	return (
		<>
			<div className="px-5 md:px-0">
				<div className="w-w-full md:w-1/2 m-auto p-3 border-2 rounded-2xl mt-10">
					<section className="flex justify-center font-bold text-3xl mx-8 my-8">
						<span>Đăng ký thông tin google</span>
					</section>
					<section className="flex justify-center">
						<form onSubmit={handleSubmit(onSubmit)} className="flex justify-center w-full">
							<div className="flex flex-col items-center gap-y-4  w-full">
								<input
									placeholder="email"
									{...register('email', { required: true })}
									className="border-solid border-2 rounded h-10  px-2 w-full"
									readOnly={true}
								/>
								{errors.email && <p className="text-red-600">{errors.email.message}</p>}
								<input
									placeholder="username"
									{...register('username', {
										required: 'username không được để trống',
										maxLength: {
											value: 20,
											message: 'username dài không được quá 20 ký tự',
										},
									})}
									className="border-solid border-2 rounded h-10  px-2 w-full"
								/>
								{errors?.username && <p className="text-red-600">{errors.username.message}</p>}
								<input
									placeholder="dob"
									{...register('dob')}
									type={'date'}
									className="border-solid border-2 rounded h-10  px-2 w-full"
								/>

								{isLoaded ? (
									<>
										<GoogleMap
											mapContainerStyle={containerStyle}
											center={center}
											zoom={10}
											onLoad={onLoad}
											onUnmount={onUnmount}
											onClick={onchangeMap}
										>
											{/* Child components, such as markers, info windows, etc. */}
											<></>
										</GoogleMap>
									</>
								) : (
									<></>
								)}
								<div className="flex justify-center gap-x-7">
									<button type="submit" className="bg-sky-300 w-28 h-10 rounded font-semibold text-slate-100">
										Submit
									</button>
								</div>
							</div>
						</form>
					</section>
				</div>
			</div>
		</>
	);
}

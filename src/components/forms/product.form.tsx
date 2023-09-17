import { useForm } from 'react-hook-form';
import ProductDetailForm, { IDetailFormValues } from './product-detail.form';
import TextInput from '../inputs/text.input';
import SelectInput from '../inputs/select.input';

export interface IProductFormValues {
	title: string;
	categoryId: string;
	details: IDetailFormValues[];
}

const arrayValue = [
	{
		label: 'hàng cấp thấp',
		id: 1,
	},
	{
		label: 'hàng cấp trung',
		id: 2,
	},
	{
		label: 'hàng cấp cao',
		id: 3,
	},
];

export default function ProductForm() {
	let defaultValues: any[] = [];
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		getValues,
		setValue,
	} = useForm<IProductFormValues>({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		defaultValues: {
			title: '',
			categoryId: '',
			details: [],
		},
		resolver: undefined,
		context: undefined,
		criteriaMode: 'all',
		shouldFocusError: true,
		shouldUnregister: false,
		shouldUseNativeValidation: false,
		delayError: undefined,
	});

	const onSubmit = (data: IProductFormValues) => {
		console.log(errors);
		console.log(data);
	};

	return (
		<>
			<div className="w-[1054px] m-auto">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex gap-[20px] w-full">
						<div className="flex flex-col gap-[20px] w-1/2">
							<TextInput
								register={register}
								errors={errors}
								validate={{
									required: {
										value: true,
										message: 'field không được để trống',
									},
								}}
								name={'title'}
								placeholder={'Tên sản phẩm'}
							/>
							<SelectInput
								register={register}
								errors={errors}
								arrayValue={arrayValue}
								bindingLabel={'label'}
								bindingValue={'value'}
								fieldName={'categoryId'}
								placeholder={'loại sản phẩm'}
							/>
							<button type="submit" className="bg-sky-300 w-28 h-10 rounded font-semibold text-slate-100">
								save
							</button>
						</div>
						<div className="w-1/2">
							<ProductDetailForm {...{ control, register, defaultValues, getValues, setValue, errors }} />
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

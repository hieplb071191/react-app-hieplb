import { useForm } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import TextInput from '../inputs/text.input';

export interface IDetailFormValues {
	color: string;
	quantity: number;
	size: string;
	price: number;
}

export default function ProductDetailForm({ control, register, errors }: any) {
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'details',
	});

	return (
		<>
			<div className="flex flex-col">
				<ul>
					{fields.map((item, index) => {
						return (
							<li key={item.id} className="flex flex-col gap-5 mb-5">
								<TextInput
									register={register}
									errors={errors}
									validate={{
										required: {
											value: true,
											message: 'field không được để trống',
										},
									}}
									name={`details.${index}.color`}
									placeholder="màu sắc"
								/>
								<TextInput
									register={register}
									errors={errors}
									validate={{
										required: {
											value: true,
											message: 'field không được để trống',
										},
									}}
									name={`details.${index}.quantity`}
									placeholder="số lượng"
									type="number"
								/>
								<TextInput
									register={register}
									errors={errors}
									validate={{
										required: {
											value: true,
											message: 'field không được để trống',
										},
									}}
									name={`details.${index}.size`}
									placeholder="kích thước"
								/>
								<TextInput
									register={register}
									errors={errors}
									validate={{
										required: {
											value: true,
											message: 'field không được để trống',
										},
									}}
									name={`details.${index}.price`}
									placeholder="giá "
									type="number"
								/>
								<button
									type="button"
									onClick={() => {
										remove(index);
									}}
									className="bg-sky-300 w-28 h-10 rounded font-semibold text-slate-100"
								>
									Xóa
								</button>
							</li>
						);
					})}
				</ul>
				<section className="flex justify-start mt-[20px] gap-4">
					<button
						type="button"
						onClick={() => {
							append({ name: 'append' });
						}}
						className="bg-sky-300 w-28 h-10 rounded font-semibold text-slate-100"
					>
						Thêm chi tiết
					</button>
				</section>
			</div>
		</>
	);
}

import { register } from 'module';

export interface SelectInputInterface {
	register: any;
	errors: any;
	arrayValue: any[];
	bindingLabel: string;
	bindingValue: string;
	fieldName: string;
	validate?: any;
	placeholder?: string;
}

const SelectInput = (props: SelectInputInterface) => {
	const { register, errors, arrayValue, bindingLabel, bindingValue, fieldName, validate, placeholder = '' } = props;
	return (
		<>
			<select
				{...register(fieldName, validate ? validate : {})}
				className="border-solid border-2 rounded h-[40px]"
				placeholder={placeholder}
			>
				{arrayValue.map((item, index) => (
					<option value={item[bindingValue]} key={`${fieldName}-${index}`}>
						{item[bindingLabel]}
					</option>
				))}
			</select>
			{errors[fieldName] && <p className="text-red-600">{errors[fieldName].message}</p>}
		</>
	);
};

export default SelectInput;

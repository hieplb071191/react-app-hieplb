export interface TextInputInterface {
	register: any;
	errors: any;
	validate: any;
	name: string;
	placeholder?: string;
	type?: string;
}
function TextInput(props: TextInputInterface) {
	const { register, errors, validate, name, placeholder = '', type = 'text' } = props;
	console.log(name);
	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				{...register(name, validate)}
				className="border-solid border-2 rounded h-[40px]  px-2 w-full"
			/>
			{errors[name] && <p className="text-red-600">{errors[name].message}</p>}
		</>
	);
}

export default TextInput;

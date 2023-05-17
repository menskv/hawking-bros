import React from "react";
import { FormBody, FormRow, Row } from "./style.ts";
import { useForm } from "react-hook-form";
import { FormValues } from "./type";
import { TextField } from "../Input";
import { Checkbox } from "../Checkbox";
import { Toggle } from "../Toggle";
import { SubmitButtons } from "../SubmitButtons";
import { RadioGroup } from "../RadioButton";
import { RadioButton } from "../RadioButton";
import { Dropdown } from "../Dropdown";
import { OptionItem } from "../Dropdown/OptionItem.tsx";

export const Form = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isValid },
	} = useForm<FormValues>({
		defaultValues: {
			username: "",
			password: "",
			checkbox: false,
			toggle: false,
			radio: "1",
			dropdown: "",
		},
		mode: "onBlur",
	});
	const onSubmit = (values: FormValues) => {
		alert(JSON.stringify(values));
	};
	const radio = watch("radio");
	const dropdown = watch("dropdown");
	console.log(watch());
	const onChange = (key: keyof FormValues) => (value: any) =>
		setValue(key, value);

	return (
		<FormRow>
			<FormBody>
				<Row>
					<TextField
						label="Username"
						error={errors.username?.message}
						placeholder="Enter username"
						{...register("username", {
							required: "Field is required",
						})}
					/>
				</Row>
				<Row>
					<TextField
						type="password"
						label="Password"
						placeholder="Enter password"
						error={errors.password?.message}
						prompt="Your password is between 4 and 12 characters"
						{...register("password", {
							minLength: {
								value: 4,
								message: "Min length 4 characters",
							},
							maxLength: {
								value: 12,
								message: "Max length 12 characters",
							},
							required: "Field is required",
						})}
					/>
				</Row>
				<Row>
					<Checkbox {...register("checkbox")} label="Remember me" />
				</Row>
				<Row>
					<Toggle {...register("toggle")} />
				</Row>
				<Row>
					<RadioGroup value={radio} onChange={onChange("radio")}>
						<RadioButton value="1" label="Radio selection 1" />
						<RadioButton value="2" label="Radio selection 2" />
						<RadioButton value="3" label="Radio selection 3" />
					</RadioGroup>
				</Row>
				<Row>
					<Dropdown value={dropdown} onChange={onChange("dropdown")}>
						<OptionItem value="1">Dropdown Option</OptionItem>
						<OptionItem value="2">Dropdown Option 1</OptionItem>
						<OptionItem value="3">Dropdown Option 2</OptionItem>
					</Dropdown>
				</Row>
				<SubmitButtons
					onSubmit={handleSubmit(onSubmit)}
					disabled={!isValid}
				/>
			</FormBody>
		</FormRow>
	);
};

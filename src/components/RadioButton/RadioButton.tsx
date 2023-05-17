import * as React from "react";
import { Label, LabelText, Row } from "./style.ts";
import { RadioButtonProps } from "./type.ts";

export const RadioButton: React.FC<RadioButtonProps> = (props) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (props.onChange) {
			props.onChange(event.target.value);
		}
	};
	return (
		<Row>
			<Label active={props.active}>
				<input
					name={props.id}
					type="radio"
					value={props.value}
					onChange={onChange}
				/>
			</Label>
			<LabelText>{props.label}</LabelText>
		</Row>
	);
};

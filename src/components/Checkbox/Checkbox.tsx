import * as React from "react";
import { Icon, Label, LabelText } from "./style.ts";
import { CheckboxProps } from "./type.ts";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	(props, ref): React.JSX.Element => {
		const [checked, setChecked] = React.useState<boolean>(false);
		const { label, ...rest } = props;
		const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
			setChecked(!checked);
			await props.onChange(event);
		};
		return (
			<Label>
				<Icon>
					{checked && (
						<img src="src/assets/checkbox-icon.svg" alt="" />
					)}
				</Icon>
				<LabelText>{label}</LabelText>
				<input
					checked={checked}
					type="checkbox"
					{...rest}
					onChange={onChange}
					ref={ref}
				/>
			</Label>
		);
	},
);

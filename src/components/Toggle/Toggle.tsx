import React from "react";
import { Label, LabelText, Row } from "./style.ts";
import { ToggleProps } from "./type.ts";

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
	(props, ref) => {
		const { ...rest } = props;
		const [checked, setChecked] = React.useState(false);
		const initialLabel = checked ? "On" : "Off";

		const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
			setChecked(!checked);
			await props.onChange(event);
		};
		return (
			<Row>
				<Label className={checked ? "active" : ""}>
					<input
						checked={checked}
						type="checkbox"
						{...rest}
						onChange={onChange}
						ref={ref}
					/>
				</Label>
				<LabelText>{initialLabel}</LabelText>
			</Row>
		);
	},
);

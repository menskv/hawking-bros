import * as React from "react";
import { RadioGroupRow } from "./style.ts";
import { RadioGroupProps } from "./type.ts";
import { useId } from "react";

export const RadioGroup = (props: React.PropsWithChildren<RadioGroupProps>) => {
	const children = React.Children.toArray(props.children);
	const id = useId();
	return (
		<RadioGroupRow>
			{children.map((item: any) => {
				return React.cloneElement(item, {
					onChange: props.onChange,
					active: props.value === item.props.value,
					id,
				});
			})}
		</RadioGroupRow>
	);
};

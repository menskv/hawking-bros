import * as React from "react";

export interface RadioGroupProps {
	value: any;
	row?: boolean;
	onChange?: (value: any) => void;
}

export interface RadioButtonProps {
	value: any;
	onChange?: (value: any) => void;
	label: string | React.JSX.Element;
	id?: string;
	active?: boolean;
}

export interface RadioGroupRowProps {
	row?: boolean;
}
export interface LabelProps {
	active?: boolean;
}

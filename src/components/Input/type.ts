import { UseFormRegisterReturn } from "react-hook-form";
import * as React from "react";

export interface CoreInputProps extends UseFormRegisterReturn {
	error?: string;
	placeholder?: string;
	label?: string | React.JSX.Element;
	prompt?: string | React.JSX.Element;
	type?: string;
	value?: string;
}

export interface MessageProps {
	messageColor: string;
}

export interface TextFieldProps extends CoreInputProps {
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export interface InputStyledProps {
	error?: string;
}

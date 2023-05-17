import * as React from "react";
import { CoreInput } from "./CoreInput.tsx";
import { TextFieldProps } from "./type.ts";

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
	(props, ref) => {
		return <CoreInput {...props} ref={ref} />;
	},
);

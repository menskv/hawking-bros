import * as React from "react";
import { Button, Row } from "./style.ts";
import { SubmitButtonsProps } from "./type.ts";

export const SubmitButtons: React.FC<SubmitButtonsProps> = (props) => {
	return (
		<Row>
			<Button>Cancel</Button>
			<Button
				type="submit"
				onClick={props.onSubmit}
				disabled={props.disabled}
			>
				Next
			</Button>
		</Row>
	);
};

import * as React from "react";
import { CoreInputProps } from "./type.ts";
import {
	CoreInputContainer,
	InputStyled,
	InputStyledContainer,
	Label,
	Message,
} from "./style.ts";

export const CoreInput = React.forwardRef<HTMLInputElement, CoreInputProps>(
	(props, ref) => {
		const { prompt, error, label, placeholder, ...rest } = props;
		const id = React.useId();
		return (
			<CoreInputContainer>
				<Label htmlFor={id}>{label}</Label>
				<InputStyledContainer>
					<InputStyled
						error={error}
						id={id}
						placeholder={placeholder}
						{...rest}
						ref={ref}
					/>
					{error && (
						<img
							src="src/assets/error.svg"
							alt="icon"
							className="error-img"
						/>
					)}
				</InputStyledContainer>
				{error && <Message messageColor="#EB5757">{error}</Message>}
				{prompt && !error && (
					<Message messageColor="#666666">{prompt}</Message>
				)}
			</CoreInputContainer>
		);
	},
);

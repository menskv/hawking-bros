import styled from "styled-components";
import { InputStyledProps, MessageProps } from "./type.ts";

export const Label = styled.label`
	font-weight: 600;
	font-size: 12px;
	line-height: 18px;
	color: #666666;
	display: block;
	margin-bottom: 8px;
`;
export const InputStyled = styled.input<InputStyledProps>`
	position: relative;
	color: #333333;
	padding: 16px;
	width: 100%;
	font-size: 1rem;
	outline: none;
	border: ${(props) =>
		props.error ? "2px solid #EB5757" : "2px solid #cccccc"};
	line-height: 24px;
	border-radius: 8px;

	&:focus {
		border: 2px solid #7a5cfa;
	}

	&::placeholder {
		color: #666666;
	}
`;
export const Message = styled.div<MessageProps>`
	color: ${(props) => props.messageColor};
	font-size: 12px;
	line-height: 18px;
	margin-top: 8px;
`;
export const CoreInputContainer = styled.div`
	width: 100%;
`;
export const InputStyledContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	.error-img {
		position: absolute;
		margin-right: 16px;
		width: 24px;
		height: 24px;
	}
`;

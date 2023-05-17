import styled from "styled-components";
import { LabelProps, RadioGroupRowProps } from "./type.ts";

export const Label = styled.label<LabelProps>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 1px solid #cccccc;

	&::before {
		content: "";
		position: absolute;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #7a5cfa;
		opacity: ${(props) => (props.active ? "1" : "0")};
	}

	& input {
		position: absolute;
		left: -1000px;
		opacity: 0;
		z-index: -10000;
	}
`;
export const LabelText = styled.div`
	font-size: 16px;
	line-height: 24px;
	color: #666666;
	margin-left: 16px;
`;
export const RadioGroupRow = styled.div<RadioGroupRowProps>`
	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
`;
export const Row = styled.div`
	display: flex;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 32px;
	}
`;

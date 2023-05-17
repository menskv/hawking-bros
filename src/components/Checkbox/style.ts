import styled from "styled-components";

export const Label = styled.label`
	position: relative;
	display: flex;
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
export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	background: #ffffff;
	border: 1px solid #cccccc;
	border-radius: 8px;
`;

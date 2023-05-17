import styled from "styled-components";

export const Label = styled.label`
	position: relative;
	height: 24px;
	width: 49px;
	border-radius: 32px;
	background-color: #fff;
	cursor: pointer;
	border: 1px solid #cccccc;

	& input {
		position: absolute;
		left: -1000px;
		opacity: 0;
		z-index: -10000;
	}

	&::before {
		content: "";
		position: absolute;
		height: 18px;
		width: 18px;
		top: 50%;
		left: 27px;
		transform: translateY(-50%);
		transition: all 0.3s ease-in-out;
		background: #f4f4f4;
		border: 1px solid #cccccc;
		border-radius: 32px;
	}

	&.active::before {
		background-color: #fff;
		transform: translate(-25px, -50%);
	}

	&.active {
		background: #7a5cfa;
	}
`;
export const LabelText = styled.div`
	font-size: 16px;
	line-height: 24px;
	color: #666666;
	margin-left: 16px;
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
`;

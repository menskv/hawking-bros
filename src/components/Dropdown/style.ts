import styled from "styled-components";

export const DropdownWrapper = styled.div`
	position: relative;
	width: 100%;
`;
export const OptionItemWrapper = styled.div`
	position: absolute;
	left: 0;
	top: 81px;
	width: 100%;
`;
export const OptionItemContainer = styled.div`
	display: flex;
	padding: 16px;
	background: #ffffff;
	color: #666666;
	width: 100%;
	border: 1px solid #cccccc;
	&:last-child {
		border-radius: 0 0 8px 8px;
	}
	&:hover {
		color: #fff;
		background: #7a5cfa;
	}
`;

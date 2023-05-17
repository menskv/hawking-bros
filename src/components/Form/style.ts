import styled from "styled-components";

export const FormRow = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
`;

export const FormBody = styled.div`
	background: #fff;
	width: 760px;
	padding: 96px 98px 92px;
`;

export const Row = styled.div<{ marginBottom?: string }>`
	display: flex;
	align-items: center;
	margin-bottom: ${(props) => props.marginBottom || "32px"};

	&:last-child {
		margin-bottom: 200px;
	}
`;

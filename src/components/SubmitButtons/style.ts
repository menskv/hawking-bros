import styled from "styled-components";

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Button = styled.button`
	padding: 16px;
	border-radius: 8px;
	width: 172px;
	border: 1px solid #7a5cfa;
	${(props) =>
		props.type === "submit" && !props.disabled
			? `
			 color:  #fff;
  background: #7A5CFA;
 
  `
			: `
   color: #7A5CFA;
  background: #fff;
  `}
`;

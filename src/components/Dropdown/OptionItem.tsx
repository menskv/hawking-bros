import React from "react";
import { OptionProps } from "./type.ts";
import { OptionItemContainer } from "./style.ts";

export const OptionItem = (props: React.PropsWithChildren<OptionProps>) => {
	return (
		<OptionItemContainer data-id={props.value} onClick={props.onClick}>
			{props.children}
		</OptionItemContainer>
	);
};

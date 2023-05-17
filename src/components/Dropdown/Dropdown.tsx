import * as React from "react";
import { DropdownWrapper, OptionItemWrapper } from "./style.ts";
import { TextField } from "../Input";
import { DropdownProps } from "./type.ts";
import { useOutsideClick } from "../common/useOutsideClick.ts";

export const Dropdown = (props: React.PropsWithChildren<DropdownProps>) => {
	const [show, setShow] = React.useState(false);
	const ref = useOutsideClick(() => {
		setShow(false);
	});
	const onOpen = () => {
		setShow(true);
	};
	const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
		props.onChange(event.currentTarget.dataset.id);
		setShow(false);
	};

	return (
		<DropdownWrapper ref={ref as any}>
			<TextField
				onChange={undefined as any}
				onBlur={undefined as any}
				name="dropdown"
				label="Dropdown title"
				placeholder="Enter option"
				value={props.value}
				onClick={onOpen}
			/>
			{show && (
				<OptionItemWrapper>
					{React.Children.map(props.children, (child: any) => {
						return React.cloneElement(child, { onClick });
					})}
				</OptionItemWrapper>
			)}
		</DropdownWrapper>
	);
};

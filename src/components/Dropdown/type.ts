export interface DropdownProps {
	value: any;
	onChange: (value: any) => void;
}

export interface OptionProps {
	onClick?: (value: any) => void;
	value?: any;
}

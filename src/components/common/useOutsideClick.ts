import React from "react";

export const useOutsideClick = (callback: VoidFunction) => {
	const ref = React.useRef<HTMLElement>(null);

	React.useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener("click", handleClick, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
		};
	}, [callback, ref]);

	return ref;
};

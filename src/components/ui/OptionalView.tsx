import React from "react";

type Props = {
	condition: boolean;
	children: React.ReactNode;
};

const OptionalView = ({ condition, children }: Props) => {
	return condition ? <div>{children}</div> : null;
};

export default OptionalView;

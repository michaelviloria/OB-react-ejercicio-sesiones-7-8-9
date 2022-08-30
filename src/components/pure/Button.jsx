import React from "react";

const Button = ({ type }) => {
	return (
		<button
			type={type}
			className="w-full max-w-xs p-2 mx-auto my-2 font-semibold bg-blue-400 rounded-lg"
		>
			Add
		</button>
	);
};

export default Button;

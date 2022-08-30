import React from "react";

const Input = ({ type, reference, id, placeholder }) => {
	console.log(reference);
	return (
		<input
			type={type}
			ref={reference}
			id={id}
			placeholder={placeholder}
			required
			className="py-1 pl-2 pr-4 my-2 border-2 border-blue-400 rounded-lg outline-none"
		/>
	);
};

export default Input;

import React, { useRef } from "react";

const ContacForm = ({ add }) => {
	const nameRef = useRef();
	const emailRef = useRef();

	function addContact(e) {
		e.preventDefault();

		const newContact = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			status: false,
		};
		add(newContact);
	}
	return (
		<form onSubmit={addContact}>
			<h3>Form to add the new contact</h3>
			<input
				type="text"
				ref={nameRef}
				id="inputName"
				placeholder="Name of the contact ..."
				required
				autoFocus
				className="py-1 pl-2 pr-4 my-2 border-2 border-blue-400 rounded-lg outline-none"
			/>
			<input
				type="email"
				ref={emailRef}
				id="inputEmail"
				placeholder="Email of the contact ..."
				required
				className="py-1 pl-2 pr-4 my-2 border-2 border-blue-400 rounded-lg outline-none"
			/>
			<button
				type="submit"
				className="w-full max-w-xs p-2 mx-auto my-2 font-semibold bg-blue-400 rounded-lg"
			>
				Add
			</button>
		</form>
	);
};

export default ContacForm;

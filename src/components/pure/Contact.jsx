import React from "react";
import { Trash, PersonFill, ToggleOff, ToggleOn } from "react-bootstrap-icons";

const Contact = ({ contact, status, remove }) => {
	function contactStatusIcon() {
		if (contact.status) {
			return (
				<div>
					<b>Contact On</b>
					<ToggleOn onClick={() => status(contact)} />
				</div>
			);
		} else {
			return (
				<div>
					<b>Contact off</b>
					<ToggleOff onClick={() => status(contact)} />
				</div>
			);
		}
	}
	return (
		<tr>
			<th>
				<PersonFill />
			</th>
			<th>{contact.name}</th>
			<td>{contact.email}</td>
			<td>
				{contactStatusIcon()}
				<Trash onClick={() => remove(contact)} />
			</td>
		</tr>
	);
};

export default Contact;

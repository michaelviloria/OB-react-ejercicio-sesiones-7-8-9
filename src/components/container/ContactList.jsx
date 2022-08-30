import React, { useState } from "react";
import Contact from "../pure/Contact";
import ContactForm from "../container/ContacForm";

const ContactList = () => {
	const defaultContact1 = {
		name: "michael viloria",
		email: "michael@michael.com",
		status: false,
	};
	const defaultContact2 = {
		name: "steven garcia",
		email: "steven@steven.com",
		status: true,
	};
	const defaultContact3 = {
		name: "steven viloria",
		email: "michael@steven.com",
		status: false,
	};

	const [contacts, setContacts] = useState([
		defaultContact1,
		defaultContact2,
		defaultContact3,
	]);

	function statusContact(contact) {
		console.log("The status connection this contact is: ", contact);
		const index = contacts.indexOf(contact);
		const tempContact = [...contacts];
		tempContact[index].status = !tempContact[index].status;
		setContacts(tempContact);
	}

	function deleteContact(contact) {
		console.log("Delete this contact: ", contact);
		const index = contacts.indexOf(contact);
		const tempContact = [...contacts];
		tempContact.splice(index, 1);
		setContacts(tempContact);
	}

	function addContact(contact) {
		console.log("Add this contact: ", contact);
		const tempContact = [...contacts];
		tempContact.push(contact);
		setContacts(tempContact);
	}

	return (
		<div>
			<h1>Your Contacts</h1>
			<table>
				<thead>
					<tr>
						<th>Icon</th>
						<th>Name</th>
						<th>Email</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((contact, index) => {
						return (
							<Contact
								key={index}
								contact={contact}
								status={statusContact}
								remove={deleteContact}
							/>
						);
					})}
				</tbody>
			</table>
			<ContactForm add={addContact} />
		</div>
	);
};

export default ContactList;

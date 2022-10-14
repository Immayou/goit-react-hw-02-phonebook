import React, { Component } from "react";
import { ContactItem } from './ContactList.styled'


class ContactList extends Component {

    render () {
        return (
            <ul>
                {this.props.contacts.map(({id, name, number}) => (
                   <ContactItem key={id}>{name}: {number}</ContactItem>
                ))}
            </ul>
        );
};}

export default ContactList;

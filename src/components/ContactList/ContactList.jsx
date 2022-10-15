import React, { Component } from "react";
import { ContactItem, NameInfo, NumberInfo, DeleteButton } from './ContactList.styled'


class ContactList extends Component {

    render () {
        return (
            <ul>
                {this.props.contacts.map(({id, name, number}) => (
                   <ContactItem key={id}>
                    <NameInfo>{name}: </NameInfo>
                    <NumberInfo>{number}</NumberInfo>
                    <DeleteButton type='button' onClick={() => (this.props.onDeleteContact(id))}>Delete</DeleteButton>
                   </ContactItem>
                ))}
            </ul>
        );
};}

export default ContactList;

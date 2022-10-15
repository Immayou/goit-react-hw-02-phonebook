import React, { Component } from "react";

import ContactForm from '../ContactForm/ContactForm'

import ContactList from '../ContactList/ContactList'

import Filter from '../Filter/Filter'

import { Wrapper, Title, ContactsTitle } from './App.styled'

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  formSubmitHandler = data => {
    const checkIfNewContactAlreadyExists = this.state.contacts.find(({name}) => (name.toLowerCase() === data.name.toLowerCase()))
    checkIfNewContactAlreadyExists ?
    alert(`${data.name} is already in contacts`)
    : this.setState((prevState) => ({contacts: [data, ...prevState.contacts]}))
  }

  filterHandler = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getFiltredContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(({name}) => name.toLowerCase().includes(normalizeFilter))
    return visibleContacts
  }

  deleteContact = (idToDelete) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({id}) => id !== idToDelete)
    }))
  }

  render () {
    const { filter, contacts} = this.state
    const contactsToRender = filter.length !== 0 ? this.getFiltredContacts() : contacts;
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm submitData={this.formSubmitHandler}/>
      <ContactsTitle>ContactsTitle</ContactsTitle>
      <Filter value={filter} filterInput={this.filterHandler}/>
      <ContactList contacts={contactsToRender} onDeleteContact={this.deleteContact}/>
    </Wrapper>
  );
    };
};

export default App;
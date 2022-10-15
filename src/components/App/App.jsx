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
    this.setState((prevState) => ({
      contacts: [data, ...prevState.contacts]}))
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
    const contactsToRender = this.state.filter.length !== 0 ? this.getFiltredContacts() : this.state.contacts;
  return (
    
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm submitData={this.formSubmitHandler}/>
      <ContactsTitle>ContactsTitle</ContactsTitle>
      <Filter value={this.state.filter} filterInput={this.filterHandler}/>
      <ContactList contacts={contactsToRender} onDeleteContact={this.deleteContact}/>
    </Wrapper>
  );
    };
};

export default App;
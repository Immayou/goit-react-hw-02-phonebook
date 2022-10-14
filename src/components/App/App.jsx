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

  render () {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm submitData={this.formSubmitHandler}/>
      <ContactsTitle>ContactsTitle</ContactsTitle>
      <Filter/>
      <ContactList newContacts={this.state.contacts}/>
    </Wrapper>
  );
    };
};

export default App;
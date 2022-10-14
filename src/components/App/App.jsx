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

  filterHandler = (value) => {
    this.setState({filter: value})
  }

  getFiltredContacts = () => {
    return this.state.contacts.map(({name}) => {name}).filter(el => {el.text.toLowerCase().includes(this.state.filter.toLowerCase())})
  }

  render () {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm submitData={this.formSubmitHandler}/>
      <ContactsTitle>ContactsTitle</ContactsTitle>
      <Filter value={this.state.value} filterInput={this.filterHandler}/>
      <ContactList contacts={this.state.contacts}/>
    </Wrapper>
  );
    };
};

export default App;
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './contactFilter/ContactFilter';
import { Container } from './App.styled';


import { useSelector } from 'react-redux';

export const App = () => {
  // отримання переліку контактів із state для умови відображення компонента ContactList
  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts:</h2>
      <Filter />
      {contacts.items.length !== 0 && <ContactsList />}
    </Container>
  );
};
import { useState } from 'react';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { add } from '../../redux/contacts/contactsSlice'

import {
  FormWrapper,
  ButtonAdd,
  TitleInput,
  InputField,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // функція отримання даних з полів введення
  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  // функція відправки даних до state
  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid(3);
    dispatch(add({ id, name, number }));
    reset();
  };

  // функція очищення значень форми
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TitleInput>
        Name
        <InputField
          type="text"
          name="name"
          value={name}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </TitleInput>

      <TitleInput>
        Number
        <InputField
          type="tel"
          name="number"
          value={number}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </TitleInput>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </FormWrapper>
  );
};
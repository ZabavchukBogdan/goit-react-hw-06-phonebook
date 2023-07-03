import { TitleFindInput, InputFindField } from './ContactFilter.styled';


import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { change } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  // функція отримання даних з поля filter
  const changeFilter = event => {
    dispatch(change(event.currentTarget.value));
  };

  const value = useSelector(state => state.filter.value); // отримання значення тексту із state

  return (
    <TitleFindInput>
      Find contacts by name
      <InputFindField type="text" value={value} onChange={changeFilter} />
    </TitleFindInput>
  );
};
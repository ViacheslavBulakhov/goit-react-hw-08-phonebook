import { FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export function Filter() {
  const dispath = useDispatch();

  return (
    <>
      <FormLabel>Search Contact</FormLabel>
      <Input
        as={Input}
        id="text"
        name="text"
        type="text"
        variant="filled"
        placeholder="Search"
        onChange={e => {
          changeFilter(dispath(changeFilter(e.target.value.trim())));
        }}
        style={{
          width: '100%',
          marginBottom: 10,
        }}
      />
    </>
  );
}

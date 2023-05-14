import { AddIcon } from '@chakra-ui/icons';
import { Button, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export function Filter({ onOpen }) {
  const dispath = useDispatch();

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>AddContact</span>
        <Button onClick={onOpen}>
          <AddIcon />
        </Button>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
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
          }}
        />
      </div>
    </>
  );
}

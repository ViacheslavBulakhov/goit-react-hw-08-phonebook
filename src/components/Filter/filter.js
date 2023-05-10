import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import TextField from '@mui/material/TextField';

export function Filter() {
  const dispath = useDispatch();

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={e => {
          changeFilter(dispath(changeFilter(e.target.value.trim())));
        }}
      />
    </>
  );
}

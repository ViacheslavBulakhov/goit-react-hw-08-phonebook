import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export function Filter() {
  const dispath = useDispatch();

  return (
    <>
      <input
        label="Search"
        variant="outlined"
        onChange={e => {
          changeFilter(dispath(changeFilter(e.target.value.trim())));
        }}
      ></input>
    </>
  );
}

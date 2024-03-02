import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
// import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  // export const Filter = ({ filter, setFilter }) => {

  return (
    <div className={css.container}>
      <p className={css.title}>Find Contacts by Name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
        className={css.input}
      />
    </div>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   setFilter: PropTypes.func.isRequired,
// };

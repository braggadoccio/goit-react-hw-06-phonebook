import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

export const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
// export const ContactList = ({ filterContact, deleteContact }) => {
//   const filteredContacts = filterContact();

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul>
      {filteredContacts.map(filteredContact => (
        <ContactListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
        />
      ))}
    </ul>
  );
};
//
// };

// ContactList.propTypes = {
//   filterContact: PropTypes.func.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const App = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   const [contacts, setContacts] = useState(
//     savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
//   );
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = newContact => {
//     setContacts(prevContact => [...prevContact, newContact]);
//   };

//   const deleteContact = id => {
//     setContacts(prevContact =>
//       prevContact.filter(contact => contact.id !== id)
//     );
//   };

//   const filterContact = () => {
//     const filterLowerCase = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterLowerCase)
//     );
//   };

//   return (
//     <div>
//       <h1 className="title">Phonebook</h1>
//       <ContactForm addContact={addContact} contacts={contacts} />

//       <h2 className="title">Contacts</h2>
//       <Filter filter={filter} setFilter={setFilter} />
//       <ContactList
//         filterContact={filterContact}
//         deleteContact={deleteContact}
//       />
//     </div>
//   );
// };

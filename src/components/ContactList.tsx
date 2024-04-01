import { type ContactItem as Contact } from '@/store/\bcontactSlice';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
import { Separator } from './ui/separator';
import { useAppSelector } from '@/store/hooks';

export default function ContactList() {
  const contacts = useAppSelector((state) => state.contact.items);
  const searchTerm = useAppSelector((state) => state.contact.searchTerm);

  let filteredContacts: Contact[];

  if (searchTerm) {
    filteredContacts = contacts.filter((item) =>
      item.name.includes(searchTerm)
    );
  } else {
    filteredContacts = contacts;
  }

  return (
    <div className='border-zinc-400 border-2 rounded-md shadow-lg'>
      <SearchBox />
      <Separator className='my-2' />
      {filteredContacts.map((item) => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </div>
  );
}

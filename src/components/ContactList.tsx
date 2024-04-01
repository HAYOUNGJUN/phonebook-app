import ContactItem from './ContactItem';
import SearchBox from './SearchBox';

export default function ContactList() {
  return (
    <div className='border'>
      <SearchBox />
      <ContactItem />
    </div>
  );
}

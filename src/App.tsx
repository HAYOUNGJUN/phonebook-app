import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <>
      <h1 className='text-center font-bold text-4xl m-8'>연락처</h1>
      <main className='grid grid-cols-2 gap-12 px-64'>
        <ContactForm />
        <ContactList />
      </main>
    </>
  );
}

export default App;

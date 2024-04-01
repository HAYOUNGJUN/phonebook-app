import { useRef, type FormEvent } from 'react';
import { Button } from './ui/button';
import { addContact } from '@/store/\bcontactSlice';
import { useAppDispatch } from '@/store/hooks';

export default function ContactForm() {
  const name = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredName = name.current!.value;
    const enteredPhoneNumber = +phoneNumber.current!.value;

    dispatch(
      addContact({
        id: Date.now(),
        name: enteredName,
        phoneNumber: enteredPhoneNumber,
      })
    );

    event.currentTarget.reset();
  }

  return (
    <div className='flex justify-center border-zinc-400 border-2 p-4 pb-8 rounded-md shadow-lg'>
      <form onSubmit={handleSubmit}>
        <p className='flex flex-col items-center py-2'>
          <label htmlFor='name'>이름</label>
          <input
            id='name'
            type='text'
            ref={name}
            placeholder='이름을 입력해주세요'
            className='border-2 rounded w-72 h-8 m-2'
          />
        </p>
        <p className='flex flex-col items-center py-2'>
          <label htmlFor='contact'>연락처</label>
          <input
            id='contact'
            type='tel'
            ref={phoneNumber}
            placeholder='연락처를 입력해주세요'
            className='border-2 rounded w-72 h-8 m-2'
          />
        </p>
        <p className='flex justify-center'>
          <Button className='w-full mt-4 py-6'>추가</Button>
        </p>
      </form>
    </div>
  );
}

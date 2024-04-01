import { useAppDispatch } from '@/store/hooks';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { FormEvent, useRef } from 'react';
import { saveSearchTerm } from '@/store/\bcontactSlice';

const SearchBox = () => {
  const input = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredInput = input.current!.value;

    dispatch(saveSearchTerm(enteredInput));
    event.currentTarget.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex p-2'>
        <Input
          type='text'
          placeholder='이름'
          className='w-72 mr-2'
          ref={input}
        />
        <Button type='submit'>검색</Button>
      </form>
    </div>
  );
};

export default SearchBox;

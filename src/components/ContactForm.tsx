import { Button } from './ui/button';

export default function ContactForm() {
  return (
    <div className='flex justify-center border-zinc-400 border-2 p-4 pb-8 rounded-md shadow-lg'>
      <form>
        <p className='flex flex-col items-center py-2'>
          <label htmlFor='name'>이름</label>
          <input
            id='name'
            type='text'
            placeholder='이름을 입력해주세요'
            className='border-2 rounded w-72 h-8 m-2'
          />
        </p>
        <p className='flex flex-col items-center py-2'>
          <label htmlFor='contact'>연락처</label>
          <input
            id='contact'
            type='tel'
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

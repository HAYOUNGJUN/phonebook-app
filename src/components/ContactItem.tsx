import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function ContactItem() {
  return (
    <div className='ml-2 mt-2 flex'>
      <div>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className='ml-4'>
        <div>이름</div>
        <div>number</div>
      </div>
    </div>
  );
}

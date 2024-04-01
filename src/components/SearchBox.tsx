import { Button } from './ui/button';
import { Input } from './ui/input';

export default function SearchBox() {
  return (
    <div className='flex p-2'>
      <Input type='text' placeholder='이름' className='w-72 mr-2' />
      <Button>검색</Button>
    </div>
  );
}

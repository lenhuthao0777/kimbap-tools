import { Button } from '@kimbap-tools/ui';

const Test = () => {
  return (
    <div className='flex flex-col space-y-5 p-5'>
      <div className='flex items-center space-x-5'>
        <Button variant='default'>Click!</Button>
        <Button variant='destructive'>Click!</Button>
        <Button variant='ghost'>Click!</Button>
        <Button variant='link'>Click!</Button>
        <Button variant='outline'>Click!</Button>
        <Button variant='secondary'>Click!</Button>
      </div>
    </div>
  );
};

export default Test;

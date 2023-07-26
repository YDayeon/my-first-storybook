import { Badge } from '@/components/Badge';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <Badge label='test' />
      </div>
    </main>
  );
}

import Image from 'next/image'
import { MainDisplay } from '@/app/(browse)/_components/main';

export default function Home() {
  return (
    <div className = "flex flex-col gap-y-4">
      <div className = "flex-1 ml-20">
      <MainDisplay />
      </div>
    </div>
  );
};

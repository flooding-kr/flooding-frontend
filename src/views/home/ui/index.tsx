import { DormitoryPanel, OverviewPanel } from '@/widgets/home';
import { HomeBasePageWrapper } from '@/widgets/homebase';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-12 pt-[47px] pb-[76px]">
      <OverviewPanel />
      <DormitoryPanel />
      <HomeBasePageWrapper />
    </div>
  );
}

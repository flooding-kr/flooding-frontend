import { DormitoryPanel, OverviewPanel } from '@/widgets/home';
import { HomeBasePageWrapper } from '@/widgets/homebase';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-12 pt-12 pb-20 mobile:gap-6 mobile:p-4">
      <OverviewPanel />
      <DormitoryPanel />
      <div className="w-full flex justify-center mobile:hidden">
        <HomeBasePageWrapper />
      </div>
    </div>
  );
}

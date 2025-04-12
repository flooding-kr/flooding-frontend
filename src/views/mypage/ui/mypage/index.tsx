import { MypageContainer } from '@/widgets/mypage';

export default function Mypage() {
  return (
    <div className="w-full flex flex-col items-center gap-12 pt-12 pb-20 mobile:gap-6 mobile:p-4">
      <MypageContainer />
    </div>
  );
}

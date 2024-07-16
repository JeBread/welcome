import BottomComponent from '@/components/BottomComponent';
import Header from '@/components/header';
import MidComponent from '@/components/MidComponent';
import Side from '@/components/Side';
import TopComponent from '@/components/TopComponent';

export default function Home() {
	return (
		<>
			<Header />
			<div className='relative w-full'>
				<Side />
				<div className='absolute right-0 top-[60px] bg-gray-200'>
					<div>{/* 상단 내용이 들어갑니다 */}</div>
					<div className='py-[48px] pl-[34px] pr-[30px]'>
						<TopComponent />
						<MidComponent />
						<BottomComponent />
					</div>
				</div>
			</div>
		</>
	);
}

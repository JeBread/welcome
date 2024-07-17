import BottomComponent from '@/components/BottomComponent';
import Header from '@/components/header';
import MidComponent from '@/components/MidComponent';
import Side from '@/components/Side';
import TopComponent from '@/components/TopComponent';
import BelowHeader from '@/components/belowHeader';

export default function Home() {
	return (
		<>
			<Header />
			<div className='relative w-full'>
				<Side />
				<div className='absolute right-0 top-[60px] bg-gray-200'>
					<div>
						<BelowHeader />
					</div>
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

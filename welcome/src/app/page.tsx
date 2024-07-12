import Side from '@/components/Side';
import Top from '@/components/Top';
import TopHoverCard from '@/components/TopHoverCard';
import {topData} from '@/data/top';

export default function Home() {
	return (
		<>
			<div className='flex'>
				<Side />
				<div className='flex justify-between gap-[41px]'>
					{topData.map((top, index) => {
						return (
							<div
								key={index}
								className='relative h-[221px] w-full min-w-[372px] '>
								<Top data={top} />
								<TopHoverCard data={top} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

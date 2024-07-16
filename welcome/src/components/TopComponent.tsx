import Top from '@/components/Top';
import TopHoverCard from '@/components/TopHoverCard';
import {topData} from '@/data/top';

const TopComponent = () => {
	return (
		<div className='flex justify-between gap-[41px]'>
			{topData.map((top, index) => {
				return (
					<div key={index} className='relative h-[221px] w-full min-w-[372px] '>
						<Top data={top} />
						<TopHoverCard data={top} />
					</div>
				);
			})}
		</div>
	);
};

export default TopComponent;

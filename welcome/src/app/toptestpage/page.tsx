import Top from '@/components/Top';
import React from 'react';
import {topData} from '@/data/top';
import TopHoverCard from '@/components/TopHoverCard';
export default function TopTestPage() {
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
}

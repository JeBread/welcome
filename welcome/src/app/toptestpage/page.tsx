import Top from '@/components/Top';
import React from 'react';
import {topData} from '@/data/top';
import TopHoverCard from '@/components/TopHoverCard';
export default function TopTestPage() {
	return (
		<div className='flex  justify-between gap-[41px]'>
			{topData.map((top, index) => {
				return (
					<React.Fragment key={index}>
						<Top data={top} />
						<TopHoverCard data={top} />
					</React.Fragment>
				);
			})}
		</div>
	);
}

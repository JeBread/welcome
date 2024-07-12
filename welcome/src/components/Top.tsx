import React from 'react';
import TopCard from './TopCard';
import {ItopData} from '@/types/data';
import TopHoverCard from '@/components/TopHoverCard';

const Top = ({data}: {data: ItopData}) => {
	return (
		<div>
			<TopCard>
				<TopCard.title>{data.title}</TopCard.title>
				<TopCard.titleIcon data={data} />
				<TopCard.content data={data} />
				<div className='mt-auto flex items-center gap-[10px]'>
					<TopCard.descriptionIcon data={data} />
					<TopCard.description data={data}></TopCard.description>
				</div>
			</TopCard>
		</div>
	);
};

export default Top;

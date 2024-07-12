import {ItopData} from '@/types/data';
import {FaAngleRight} from 'react-icons/fa6';
import React from 'react';

const TopHoverCard = ({data}: {data: ItopData}) => {
	return (
		<div
			className={`group relative flex h-[221px] w-full min-w-[372px] cursor-pointer flex-col justify-center rounded-[16px] bg-white px-[22px] pb-[24px] pt-[22px] hover:visible`}>
			<div className='flex w-full items-center justify-between'>
				<div>
					<div className='text-[16px] font-bold text-gray-900 opacity-0 transition group-hover:opacity-100'>
						{data.hovertitle}
					</div>
					<div className='text-[16px] font-normal text-gray-900'>
						{data.hovercontent}
					</div>
				</div>
				<div className='flex size-[50px] items-center justify-center rounded-full bg-[#F5F5F5] opacity-0 group-hover:opacity-100'>
					<FaAngleRight style={{color: '#636566'}} />
				</div>
			</div>
		</div>
	);
};

export default TopHoverCard;

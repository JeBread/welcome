import {ItopData} from '@/types/data';
import {FaAngleRight} from 'react-icons/fa6';
import React from 'react';

const TopHoverCard = ({data}: {data: ItopData}) => {
	return (
		<div
			className={`group absolute inset-0 cursor-pointer flex-col justify-center overflow-hidden rounded-[16px] bg-white px-[22px] pb-[24px] pt-[22px] opacity-0 transition hover:opacity-100`}>
			<div className='flex size-full items-center justify-between overflow-hidden '>
				<div className=''>
					<div
						style={{transition: 'transform 0.2s, opacity 0.1s ease'}}
						className='-translate-x-1/4 text-[16px] font-bold text-gray-900 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100'>
						{data.hovertitle}
					</div>
					<div
						style={{
							transition: 'transform 0.2s 0.1s, opacity 0.1s 0.1s ease',
						}}
						className='-translate-x-1/4 text-[16px] font-normal text-gray-900 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100'>
						{data.hovercontent}
					</div>
				</div>
				<div className='ease flex size-[50px] items-center justify-center rounded-full bg-[#f3f3f3] opacity-0 transition duration-200 hover:bg-[#e6e6e6] group-hover:opacity-100'>
					<FaAngleRight style={{color: '#636566'}} />
				</div>
			</div>
		</div>
	);
};

export default TopHoverCard;

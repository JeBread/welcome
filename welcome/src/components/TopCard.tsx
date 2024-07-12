import {ItopData} from '@/types/data';
import React from 'react';
import {Icon} from './Icon';

interface ItopCard {
	children?: React.ReactNode;
	data?: ItopData;
}

const TopCard = ({children}: ItopCard) => {
	return (
		<div
			className={`relative flex h-[221px] w-full min-w-[372px] cursor-pointer flex-col rounded-[16px] bg-white px-[22px] pb-[24px] pt-[22px] shadow-box `}>
			{children}
		</div>
	);
};

// Try 컴포넌트의 서브 컴포넌트
TopCard.title = ({children}: ItopCard) => {
	return <h2 className='text-[1rem] font-medium text-gray-900'>{children}</h2>;
};

TopCard.titleIcon = ({data}: ItopCard) => {
	return (
		<div className='absolute right-[22px] top-[22px]'>
			<div
				className={`flex size-[84px] items-center justify-center rounded-[20px] ${
					data?.state === 'good'
						? 'bg-green-100'
						: data?.state === 'bad'
							? 'bg-red-100'
							: 'bg-yellow-100'
				}`}>
				<div
					className={` ${
						data?.state === 'good'
							? 'text-green-900'
							: data?.state === 'bad'
								? 'text-red-900'
								: 'text-yellow-900'
					}`}>
					<Icon icon={data!.icon} />
				</div>
			</div>
		</div>
	);
};

TopCard.content = ({data}: ItopCard) => {
	return (
		<div>
			<div className='flex items-center gap-[6px]'>
				<div className=' text-[45px] font-bold'>{data?.case}</div>
				{data?.default && (
					<div className='flex items-center gap-[6px]'>
						<div className='mt-[24px] text-[20px] font-medium'>/</div>
						<div className='mt-[24px] text-[16px] font-medium'>20</div>
					</div>
				)}
				{data?.suffix ? (
					<div className='mt-[24px]'>명</div>
				) : (
					<div>
						<div className='mb-[4px] mt-[24px] text-[16px] font-medium'>건</div>
					</div>
				)}
			</div>
		</div>
	);
};

TopCard.descriptionIcon = ({data}: ItopCard) => {
	console.log(data!.icon);

	return (
		<div
			className={`flex size-[22px] items-center justify-center rounded-full ${
				data?.state === 'good'
					? 'bg-green-100'
					: data?.state === 'bad'
						? 'bg-red-100'
						: 'bg-yellow-100'
			}`}>
			<div>
				<div
					className={
						data?.state === 'good'
							? 'text-green-900'
							: data?.state === 'bad'
								? 'text-red-900'
								: 'text-yellow-900'
					}>
					<Icon icon={data!.descriptionIcon} />
				</div>
			</div>
		</div>
	);
};
TopCard.description = ({data}: ItopCard) => {
	console.log(data);
	return (
		<div className={`mt-auto flex items-center rounded-full`}>
			{' '}
			<div>
				<span className='text-[16px] font-normal'>{data?.description[0]} </span>
				<span
					className={`text-[16px] font-bold ${
						data?.state === 'good'
							? 'text-green-900'
							: data?.state === 'bad'
								? 'text-red-900'
								: 'text-yellow-900'
					}`}>
					{data?.emphasize}
				</span>
				<span className={`text-[16px] font-normal`}>
					{data?.description[1]}
				</span>
			</div>
		</div>
	);
};

export default TopCard;

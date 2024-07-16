'use client';
import react, {use} from 'react';
import {PiPackageBold} from 'react-icons/pi';
import {useBottomStore} from '@/store/bottomStore';
import {useState} from 'react';

type BotTestProps = {
	item: {
		inquiryType: string;
		total: number;
		content: string;
	};
};

export default function BotTest({item}: BotTestProps) {
	const {selectedInquiryType, setSelectedInquiryType} = useBottomStore();

	return (
		<>
			<div
				style={{transition: 'transform 0.2s, opacity 0.1s ease'}}
				onClick={() => {
					setSelectedInquiryType(item.inquiryType);
				}}
				className={`shadow-box relative flex h-[94px] w-[250px] cursor-pointer flex-row items-center gap-[20px] rounded-[16px] border bg-gray-100 hover:border-blue-900 hover:bg-white hover:text-blue-900 ${
					selectedInquiryType === item.inquiryType
						? 'border-blue-900 bg-white text-blue-900'
						: ''
				}`}>
				<div className='size-[52px]'>
					<div className='absolute left-[26px] top-[23px] size-[52px] rounded-[38px] bg-blue-100'></div>
					<PiPackageBold className='absolute left-[39px] top-[36px] size-[26px] text-blue-900' />
				</div>
				<div className=''>
					<div className='absolute left-[110px] top-[23px] flex flex-col'>
						<div>{item.inquiryType}</div>
						<div>{item.total}건</div>
					</div>
				</div>
			</div>
		</>
	);
}

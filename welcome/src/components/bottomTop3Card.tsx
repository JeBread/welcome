'use client';
import react from 'react';
import {PiPackageBold} from 'react-icons/pi';
import {useBottomStore} from '@/store/bottomStore';
import {RiRefund2Line} from 'react-icons/ri';
import {TbAlertCircle} from 'react-icons/tb';

type BotTestProps = {
	item: {
		inquiryType: string;
		total: number;
		content: string;
	};
};

export default function BottomTop3Card({item}: BotTestProps) {
	const {selectedInquiryType, setSelectedInquiryType} = useBottomStore();

	return (
		<>
			<div
				onClick={() => {
					setSelectedInquiryType(item.inquiryType);
				}}
				className={`shadow-box relative flex h-[94px] w-[250px] cursor-pointer flex-row items-center gap-[20px] rounded-[8px] border bg-gray-100 transition-all duration-200 hover:border-blue-900 hover:bg-white hover:text-blue-900 ${
					selectedInquiryType === item.inquiryType
						? 'shadow-select border-blue-900 bg-white text-blue-900'
						: ''
				}`}>
				<div className='size-[52px]'>
					<div className='absolute left-[26px] top-[23px] size-[52px] rounded-[38px] bg-blue-100'></div>
					{item.inquiryType === '환불' ? (
						<RiRefund2Line className='absolute left-[39px] top-[36px] size-[26px] text-blue-900' />
					) : item.inquiryType === '배송' ? (
						<PiPackageBold className='absolute left-[39px] top-[36px] size-[26px] text-blue-900' />
					) : (
						<TbAlertCircle className='absolute left-[39px] top-[36px] size-[26px] text-blue-900' />
					)}
				</div>
				<div className=''>
					<div className='absolute left-[106px] top-[23px] flex flex-col'>
						<div>{item.inquiryType}</div>
						<div>{item.total}건</div>
					</div>
				</div>
			</div>
		</>
	);
}

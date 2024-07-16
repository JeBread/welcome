import BottomAIReport from '@/components/bottomAIReport';
import BottomTop3 from '@/components/bottomTop3';
import BottomDetailList from '@/components/bottomDetailList';
import React from 'react';

const BottomComponent = () => {
	return (
		<div className='mt-[60px] flex w-full min-w-[372px] flex-col bg-white'>
			<div className='flex'>
				<BottomAIReport />
				<BottomTop3 />
			</div>
			<BottomDetailList />
		</div>
	);
};

export default BottomComponent;

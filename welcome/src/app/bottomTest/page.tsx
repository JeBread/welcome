import BottomAIReport from '@/components/bottomAIReport';
import BottomTop3 from '@/components/bottomTop3';
import BottomDetailList from '@/components/bottomDetailList';
import Header from '@/components/header';
import React from 'react';

export default function BottomTest() {
	return (
		<div className='flex w-full min-w-[372px] flex-col'>
			<Header />
			<div className='flex'>
				<BottomAIReport />
				<BottomTop3 />
			</div>
			<BottomDetailList />
		</div>
	);
}

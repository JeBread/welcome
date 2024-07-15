import Bottom from '@/components/bottom';
import BottomAIReport from '@/components/bottomAIReport';
import BottomTop3 from '@/components/bottomTop3';
import BottomDetailList from '@/components/bottomDetailList';
import Header from '@/components/header';
import React from 'react';

export default function BottomTest() {
	return (
		<div className='flex w-full min-w-[372px] flex-col'>
			<Header />
			<Bottom item='BottomTotal' />
			<div className='flex w-full flex-row'>
				<BottomAIReport item='Bottom 1' />
				<BottomTop3 item='Bottom 2' />
			</div>
			<BottomDetailList item='Bottom 3' />
		</div>
	);
}

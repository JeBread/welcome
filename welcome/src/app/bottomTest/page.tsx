import Bottom from '@/components/bottom';
import BottomAIReport from '@/components/bottomAIReport';
import BottomTop3 from '@/components/bottomTop3';
import BottomDetailList from '@/components/bottomDetailList';
import Header from '@/components/header';
import BotTest from '@/components/botTest';
import React from 'react';

export default function BottomTest() {
	return (
		<div className='flex w-full min-w-[372px] flex-col'>
			<Header />
			{/* <Bottom item='BottomTotal' /> */}
			{/* <div className='flex w-full flex-row'>
				<div className='flex justify-between gap-[41px]'> */}
			{/* <BottomAIReport item='Bottom 1' /> */}
			<BottomTop3 />
			{/* </div>
			</div> */}
			{/* <BottomDetailList item='Bottom 3' /> */}
			{/* <div className='container flex justify-between gap-[20px]'>
				<BotTest />
				<BotTest />
				<BotTest />
			</div> */}
		</div>
	);
}

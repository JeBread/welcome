import Bottom from '@/components/bottom';
// import BottomAIReport from '@/components/bottomAIReport';
// import BottomTopThree from '@/components/bottomTopThree';
// import BottomDetailList from '@/components/bottomDetailList';
import React from 'react';

export default function BottomTest() {
	return (
		<div className='flex'>
			<Bottom item='Bottom 1' />
			{/* <BottomAIReport item='Bottom 1' />
      <BottomTopThree item='Bottom 2' />
      <BottomDetailList item='Bottom 3' /> */}
		</div>
	);
}

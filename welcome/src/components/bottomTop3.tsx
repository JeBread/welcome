import React from 'react';

import {aiReportList} from '@/data/bottom';
import BottomTop3Card from './bottomTop3Card';

export default function BottomTop3() {
	return (
		<>
			<div className='ml-11'>
				<div>
					<h2 className='relative left-[29px] top-[10px] text-[20px] font-medium text-black'>
						주요 문의 유형 TOP3
					</h2>
				</div>
				<div className='mt-10 flex gap-4'>
					{aiReportList.map((item: any, index: number) => (
						<BottomTop3Card key={index} item={item} />
					))}
				</div>
			</div>
		</>
	);
}

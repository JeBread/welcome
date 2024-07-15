import React from 'react';

export default function BottomTop3(item: any) {
	return (
		<>
			<div className='ml-11'>
				<h2 className='relative left-[44px] top-[10px] text-[20px] font-medium text-[#000000]'>
					주요 문의 유형 TOP3
				</h2>
				<div className='relative left-[22px] top-[27px] h-[92px] w-[755px] rounded-lg bg-[#fafafb]'>
					<p className='relative left-[29px] top-[21px] text-base font-normal leading-[25.6px] tracking-normal text-transparent '>
						<span className='font-medium text-[#636566]'>최근 1주일간 </span>
						<span className='font-bold text-[#fd5454] '>환불 요청이 160건</span>
						<span className='font-medium text-[#636566]'>
							{' '}
							이었습니다. <br />
							부정적인 의견 중에서는{' '}
						</span>
						<span className='font-bold text-[#fd5454] '>가격이 비싸다</span>
						<span className='font-medium text-[#636566]'>
							는 의견이 가장 많습니다.
						</span>
					</p>
				</div>
			</div>
		</>
	);
}

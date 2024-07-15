'use client';

import React from 'react';
import Title from './Title';
import {Doughnut} from 'react-chartjs-2';
import {defaults} from 'chart.js/auto';
import {dailyAgeGroupData} from '@/data/mid';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const MidDoughnut = () => {
	return (
		<div className='flex h-[401px] w-[533px] flex-col rounded-[16px] bg-white p-[22px] shadow-box'>
			<Title title={'기간별 이용자 연령분포'} />
			<div className='flex size-full flex-col items-center justify-center gap-6'>
				<div className='relative flex size-[222px]  '>
					{dailyAgeGroupData && (
						<Doughnut
							options={{
								cutout: '60%',
								plugins: {
									legend: {
										display: false,
									},
								},
							}}
							data={{
								labels: ['10대', '20대', '30대', '40대'],
								datasets: [
									{
										label: 'test',
										data: dailyAgeGroupData['0:00'],
										backgroundColor: [
											'#FD5454',
											'#FFC327',
											'#00B69B',
											'#0081FF',
										],
										borderWidth: 6,
										borderRadius: 8,
									},
								],
							}}
						/>
					)}
					<div className='absolute left-1/2 top-1/2 mt-[-2px] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 font-bold'>
						<span className='text-[45px] '>100</span>
						<span className='mt-[22px] text-[16px]'>건</span>
					</div>
				</div>
				<div className='flex w-full justify-center gap-5'>
					<div className='flex items-center gap-2'>
						<div className='size-[15px]  gap-2 rounded-[5px] bg-red-900'></div>
						<span className='font-medium text-black'>10대</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='size-[15px]  gap-2 rounded-[5px] bg-yellow-900'></div>
						<span className='font-medium text-black'>20대</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='size-[15px]  gap-2 rounded-[5px] bg-green-900'></div>
						<span className='font-medium text-black'>30대</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='size-[15px]  gap-2 rounded-[5px] bg-blue-900'></div>
						<span className='font-medium text-black'>40대 이상</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MidDoughnut;

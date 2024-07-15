'use client';

import Title from '@/components/Title';
import {dailyData, monthlyData, weeklyData} from '@/data/mid';
import {Line} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import {Chart, defaults} from 'chart.js/auto';
import React, {useState} from 'react';
Chart.register(CategoryScale);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function MidLine() {
	const [select, setSelect] = useState<number>(0);

	return (
		<div className='flex h-[401px] w-[1037px] flex-col items-center rounded-[16px] bg-white p-[22px] shadow-box'>
			<div className='flex w-full items-center justify-between'>
				<Title title={'이용자 수 추이'} />
				<div className=' flex items-center gap-3'>
					<button
						onClick={() => {
							setSelect(0);
						}}
						className={`h-[28px] w-[66px] rounded-[4px] text-[14px]  ${select === 0 ? 'border-1.5 border-blue-900 bg-white text-blue-900 shadow-select' : 'bg-gray-200 text-gray-900'}`}>
						시간대별
					</button>
					<button
						onClick={() => {
							setSelect(1);
						}}
						className={`h-[28px] w-[66px] rounded-[4px] text-[14px]  ${select === 1 ? 'border-1.5 border-blue-900 bg-white text-blue-900 shadow-select' : 'bg-gray-200 text-gray-900'}`}>
						1주일
					</button>
					<button
						onClick={() => {
							setSelect(2);
						}}
						className={`h-[28px] w-[66px] rounded-[4px] text-[14px]  ${select === 2 ? 'border-1.5 border-blue-900 bg-white text-blue-900 shadow-select' : 'bg-gray-200 text-gray-900'}`}>
						1개월
					</button>
				</div>
			</div>
			<div className='mt-[25px] h-[252px] w-full'>
				<Line
					data={
						select === 0 ? dailyData : select === 1 ? weeklyData : monthlyData
					}
					options={{
						onClick: (event, elements, chart) => {
							if (elements[0]) {
								const i = elements[0].index; //선택된 라벨의 인덱스
								// console.log(chart.data.labels[i]); 라벨의 이름
							}
						},
						plugins: {
							legend: {
								display: false,
							},
						},
					}}
				/>
			</div>
			<div className='mt-auto flex items-center gap-2'>
				<div className='size-[15px]  gap-2 rounded-[5px] bg-blue-900'></div>
				<span className='font-medium text-black'>시간대별 상담 건수</span>
			</div>
		</div>
	);
}

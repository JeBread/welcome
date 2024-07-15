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
		<div className='h-[401px] w-[1037px] rounded-[16px] bg-white p-[22px] shadow-box'>
			<Title title={'이용자 수 추이'} />
			<div>
				<button
					onClick={() => {
						setSelect(0);
					}}
					className={`h-[28px] w-[63px] ${select === 0 ? 'border border-blue-900 bg-white shadow-select' : 'bg-gray-200'}`}>
					시간대별
				</button>
				<button
					onClick={() => {
						setSelect(1);
					}}
					className={`h-[28px] w-[63px] ${select === 1 ? 'border border-blue-900 bg-white shadow-select' : 'bg-gray-200'}`}>
					1주일
				</button>
				<button
					onClick={() => {
						setSelect(2);
					}}
					className={`h-[28px] w-[63px] ${select === 2 ? 'border border-blue-900 bg-white shadow-select' : 'bg-gray-200'}`}>
					1개월
				</button>
			</div>
			<div className='h-[252px] w-[973px]'>
				<Line
					data={
						select === 0 ? dailyData : select === 1 ? weeklyData : monthlyData
					}
					options={{
						// onClick: (evt, activeElements) => handleLineClick(activeElements)
						plugins: {
							legend: {
								display: false, // This hides all text in the legend and also the labels.
							},
						},
					}}
				/>
			</div>
		</div>
	);
}

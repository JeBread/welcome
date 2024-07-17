'use client';

import React, {useEffect} from 'react';
import Title from '@/components/Title';
import {useMidStore} from '@/store/midStore';

import {
	dailyAgeGroupData,
	dailyData,
	monthlyAgeGroupData,
	monthlyData,
	weeklyAgeGroupData,
	weeklyData,
} from '@/data/mid';

import {Line} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import {Chart, defaults} from 'chart.js/auto';

Chart.register(CategoryScale);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function MidLine() {
	const {
		selectIndex,
		setselectIndex,
		selectCategory,
		setselectCategory,
		selectData,
		setSelectData,
		setSpecificData,
	} = useMidStore();

	useEffect(() => {
		console.log(selectData);
	}, []);

	return (
		<div className='flex h-[401px] w-[1037px] flex-col items-center rounded-[16px] bg-white p-[22px] shadow-box'>
			<div className='flex w-full items-center justify-between'>
				<Title title={'이용자 수 추이'} />
				<div className=' flex items-center gap-3'>
					<button
						onClick={() => {
							setselectCategory(0);
							setSpecificData(
								`7월 18일 ${dailyData.labels[dailyData.labels.length - 1]}`,
							);
							setSelectData(dailyAgeGroupData[23]);
						}}
						className={`h-[28px] w-[66px] rounded-[4px] text-[14px] transition hover:border-1.5 hover:border-blue-900 hover:bg-white hover:text-blue-900 ${selectCategory === 0 ? 'border-1.5 border-blue-900 bg-white text-blue-900 shadow-select' : 'bg-gray-200 text-gray-900'}`}>
						시간대별
					</button>
					<button
						onClick={() => {
							setselectCategory(1);
							setSpecificData('7월 18일');
							setSelectData(weeklyAgeGroupData[6]);
						}}
						className={`h-[28px] w-[66px] rounded-[4px] text-[14px] transition hover:border-1.5 hover:border-blue-900 hover:bg-white hover:text-blue-900 ${selectCategory === 1 ? 'border-1.5 border-blue-900 bg-white text-blue-900 shadow-select' : 'bg-gray-200 text-gray-900'}`}>
						1주일
					</button>
					<button
						onClick={() => {
							setselectCategory(2);
							setSpecificData('7월 18일');
							setSelectData(monthlyAgeGroupData[29]);
						}}
						className={`h-[28px] w-[66px] rounded-[4px] text-[14px] transition hover:border-1.5 hover:border-blue-900 hover:bg-white hover:text-blue-900 ${selectCategory === 2 ? 'border-1.5 border-blue-900 bg-white text-blue-900 shadow-select' : 'bg-gray-200 text-gray-900'}`}>
						1개월
					</button>
				</div>
			</div>
			<div className='mt-[25px] h-[252px] w-full'>
				<Line
					data={
						selectCategory === 0
							? dailyData
							: selectCategory === 1
								? weeklyData
								: monthlyData
					}
					options={{
						scales: {
							x: {
								ticks: {color: '#D1D1DF'},
								grid: {
									display: false,
									color: '#D1D1DF', // x축 그리드 색상 설정
								},
							},
							y: {
								ticks: {color: '#D1D1DF'},
								grid: {
									color: '#D1D1DF', // y축 그리드 색상 설정
								},
								beginAtZero: true,
							},
						},
						onClick: (event: any, elements, chart) => {
							if (chart.tooltip) {
								setSpecificData(chart.tooltip?.title[0]);
							}
							if (elements[0]) {
								const i = elements[0].index;
								setselectIndex(i);
							}
							const dataset = chart.data.datasets[0] as any;
							dataset.pointBackgroundColor = dataset.data.map(
								(_: any, i: number) =>
									i == elements[0]?.index ? '#FD5454' : '#0081FF',
							);
							chart.update();
						},
						plugins: {
							legend: {
								display: false,
							},
							datalabels: {
								display: false,
							},
							tooltip: {
								usePointStyle: true,
								borderWidth: 0,
								borderColor: '#fff',
								callbacks: {
									labelPointStyle: function (context) {
										return {
											pointStyle: 'circle',
											rotation: 0,
										};
									},
									label: function (context) {
										let label = context.dataset.label || '';

										if (label) {
											label += ': ';
										}
										if (context.parsed.y !== null) {
											label += context.parsed.y + '건';
										}
										return label;
									},
									title: function (context) {
										let title = '';
										if (selectCategory === 0) {
											const regex = /^(\d+):/;
											const match = context[0].label.match(regex);
											const thisHour = new Date().getHours();
											if (match) {
												if (Number(match[1]) <= thisHour) {
													return `7월 18일 ${context[0].label}`;
												} else {
													return `7월 17일 ${context[0].label}`;
												}
											}
										} else {
											if (Number(context[0].label) >= 19) {
												title = `6월 ${context[0].label}일`;
											} else {
												title = `7월 ${context[0].label}일`;
											}
											return title;
										}
									},
								},
							},
						},
					}}
				/>
			</div>
			<div className='mt-auto flex items-center gap-2'>
				<div className='size-[12px]  gap-2 rounded-[3px] bg-blue-900'></div>
				<span className='text-[14px] font-medium text-gray-900'>
					{selectCategory === 0
						? '시간대별 '
						: selectCategory === 1
							? '1주일 (7월 12일 ~ 7월 18일) '
							: '1개월 (6월 19일 ~ 7월 18일) '}
					상담 건수
				</span>
			</div>
		</div>
	);
}

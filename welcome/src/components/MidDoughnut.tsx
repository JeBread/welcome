//https://piechart-outlabels.netlify.app/
'use client';

import React, {useEffect, useState} from 'react';
import Title from './Title';
import {useMidStore} from '@/store/midStore';

import ChartDataLabels from 'chartjs-plugin-datalabels';

import {Doughnut} from 'react-chartjs-2';
import {defaults, Chart} from 'chart.js/auto';
import {
	dailyAgeGroupData,
	weeklyAgeGroupData,
	monthlyAgeGroupData,
} from '@/data/mid';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
Chart.register(ChartDataLabels);

const MidDoughnut = () => {
	const {
		selectIndex,
		selectCategory,
		selectData,
		setSelectData,
		specificData,
		setSpecificData,
	} = useMidStore();

	const [all, setAll] = useState<number>(0);

	useEffect(() => {
		//도넛 차트에 사용 될 데이터를 정한다.
		if (selectCategory === 0) {
			setSelectData(dailyAgeGroupData[selectIndex]);
		} else if (selectCategory === 1) {
			setSelectData(weeklyAgeGroupData[selectIndex]);
		} else {
			setSelectData(monthlyAgeGroupData[selectIndex]);
		}
		//도넛 차트 가운데에 들어갈 데이터의 총 합을 낸다.
	}, [selectIndex, selectData, setSelectData, selectCategory]);

	useEffect(() => {
		if (selectCategory === 0) {
			setSelectData(dailyAgeGroupData[23]);
		} else if (selectCategory === 1) {
			setSelectData(weeklyAgeGroupData[6]);
		} else {
			setSelectData(monthlyAgeGroupData[29]);
		}
	}, [selectCategory, setSelectData]);

	useEffect(() => {
		if (selectData) {
			const sum = selectData.reduce((sum, current) => sum + current, 0);
			setAll(sum);
		}
	}, [selectData]);

	useEffect(() => {
		const hour = new Date().getHours();
		setSpecificData(`7월 18일 ${hour}:00`);
	}, []);

	return (
		<div className='flex h-[401px] w-[533px] flex-col rounded-[16px] bg-white p-[22px] shadow-box'>
			<Title title={`${specificData} 이용자 연령분포`} />
			<div className='flex size-full flex-col items-center justify-center'>
				<div className='relative mt-auto flex size-[252px]'>
					<div className='absolute left-1/2 top-1/2 mt-[-2px] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 font-bold'>
						<span className='text-[45px]'>{all}</span>
						<span className='mt-[22px] text-[16px]'>건</span>
					</div>
					<div className='absolute z-10 size-full'>
						{selectData && (
							<Doughnut
								options={{
									cutout: '60%',
									plugins: {
										legend: {
											display: false,
										},
										datalabels: {
											display: 'auto',
											color: '#fff',
											anchor: 'center',
											clip: false,
											formatter: function (value, context) {
												return ((value / all) * 100).toFixed() + '%';
											},
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
													if (context.parsed !== null) {
														label += context.parsed + '건';
													}
													return label;
												},
											},
										},
									},
								}}
								data={{
									labels: ['10대', '20대', '30대', '40대 이상'],
									datasets: [
										{
											label: '상담 건수',
											data: selectData,
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
					</div>
				</div>

				<div className='mt-[25px] flex w-full justify-center gap-5'>
					<div className='flex items-center gap-2'>
						<div className='size-[12px] gap-2 rounded-[3px] bg-red-900'></div>
						<span className='text-[14px] font-medium text-gray-900'>10대</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='size-[12px] gap-2 rounded-[3px] bg-yellow-900'></div>
						<span className='text-[14px] font-medium text-gray-900'>20대</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='size-[12px] gap-2 rounded-[3px] bg-green-900'></div>
						<span className='text-[14px] font-medium text-gray-900'>30대</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='size-[12px] gap-2 rounded-[3px] bg-blue-900'></div>
						<span className='text-[14px] font-medium text-gray-900'>
							40대 이상
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MidDoughnut;

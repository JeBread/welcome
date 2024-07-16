'use client';

import React, {useEffect, useState} from 'react';
import Title from './Title';
import {useMidStore} from '@/store/midStore';

import {Doughnut} from 'react-chartjs-2';
import {defaults} from 'chart.js/auto';
import {
	dailyAgeGroupData,
	weeklyAgeGroupData,
	monthlyAgeGroupData,
} from '@/data/mid';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const MidDoughnut = () => {
	const {
		selectIndex,
		setselectIndex,
		selectCategory,
		setselectCategory,
		selectData,
		setSelectData,
	} = useMidStore();

	const [all, setAll] = useState<number>(0);

	useEffect(() => {
		//도넛 차트에 사용 될 데이터를 정한다.
		if (selectCategory === 0) {
			setSelectData(dailyAgeGroupData[`${selectIndex}:00`]);
		} else if (selectCategory === 1) {
			setSelectData(weeklyAgeGroupData[selectIndex + 12]);
		} else {
			setSelectData(monthlyAgeGroupData[selectIndex + 1]);
		}
		//도넛 차트 가운데에 들어갈 데이터의 총 합을 낸다.
	}, [selectIndex, selectCategory, selectData, setSelectData]);

	useEffect(() => {
		if (selectData) {
			const sum = selectData.reduce((sum, current) => sum + current, 0);
			setAll(sum);
		}
	}, [selectData]);

	return (
		<div className='flex h-[401px] w-[533px] flex-col rounded-[16px] bg-white p-[22px] shadow-box'>
			<Title title={`${'기간별'} 이용자 연령분포`} />
			<div className='flex size-full flex-col items-center justify-center'>
				<div className='relative mt-auto flex size-[252px]'>
					{selectData && (
						<Doughnut
							options={{
								cutout: '60%',
								plugins: {
									legend: {
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
								labels: ['10대', '20대', '30대', '40대'],
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
					<div className='absolute left-1/2 top-1/2 mt-[-2px] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 font-bold'>
						<span className='text-[45px]'>{all}</span>
						<span className='mt-[22px] text-[16px]'>건</span>
					</div>
				</div>
				<div className='mt-[25px] flex w-full justify-center gap-5'>
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

'use client';

import React, {useState, useEffect} from 'react';
import Title from './Title';
import {Doughnut} from 'react-chartjs-2';
import {defaults} from 'chart.js/auto';
import {dailyAgeGroupData} from '@/data/mid';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const MidDoughnut = () => {
	const [data, setData] = useState<null | any>(null);

	// 데이터를 가져오는 함수 (예시: fetch API)
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setData(dailyAgeGroupData);
	// 	}, 1000);
	// }, []);

	// console.log(data);

	useEffect(() => {
		console.log(dailyAgeGroupData['0:00']);
	}, []);

	return (
		<div className='h-[401px] w-[533px] rounded-[16px] bg-white p-[22px] shadow-box'>
			<Title title={'기간별 이용자 연령분포'} />
			{dailyAgeGroupData && (
				<Doughnut
					data={{
						labels: ['Red', 'Blue', 'Yellow'],
						datasets: [
							{
								label: 'test',
								data: dailyAgeGroupData['0:00'],
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
								],
								borderWidth: 1,
							},
						],
					}}
				/>
			)}
		</div>
	);
};

export default MidDoughnut;

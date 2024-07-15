import {ScriptableContext} from 'chart.js';

type TdoughnutDataType = {
	[key: string]: number[];
};

// 1일 동안의 시간대별 상담 건수 (0~24시)
export const dailyData = {
	labels: Array.from({length: 24}, (_, i) => `${i}:00`),
	datasets: [
		{
			label: '상담 건수',
			data: Array.from({length: 24}, () => Math.floor(Math.random() * 20) + 1), // 1~20 사이의 랜덤 상담 건수
			borderColor: 'rgb(0, 129, 255)',
			borderWidth: 1.5,
			fill: 'start',
			backgroundColor: (context: ScriptableContext<'line'>) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 200);
				gradient.addColorStop(0, 'rgba(0, 129, 255, 0.3)');
				gradient.addColorStop(1, 'rgba(0, 129, 255, 0)');
				return gradient;
			},
			pointRadius: 5,
			pointHoverRadius: 6,
			pointBorderWidth: 0,
			pointBackgroundColor: Array.from({length: 24}).map((item) => {
				return 'rgb(0, 129, 255)';
			}),
			textColor: '#D1D1DF',
		},
	],
};

// 각 시간대별 연령대별 비율 (도넛 차트 데이터)
export const dailyAgeGroupData: TdoughnutDataType = {};
dailyData.labels.forEach((label) => {
	dailyAgeGroupData[label] = [
		Math.floor(Math.random() * 100) + 1, // 10대
		Math.floor(Math.random() * 100) + 1, // 20대
		Math.floor(Math.random() * 100) + 1, // 30대
		Math.floor(Math.random() * 100) + 1, // 40대 이상
	];
});

// 1주일 동안의 시간대별 상담 건수 (0~24시, 7일)
export const weeklyData = {
	labels: Array.from({length: 7}, (_, i) => `${i + 1}`),
	datasets: [
		{
			label: '상담 건수',
			data: Array.from({length: 7}, () => Math.floor(Math.random() * 100) + 10), // 10~110 사이의 랜덤 상담 건수
			borderColor: 'rgb(0, 129, 255)',
			fill: 'start',
			backgroundColor: (context: ScriptableContext<'line'>) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 200);
				gradient.addColorStop(0, 'rgba(0, 129, 255, 0.3)');
				gradient.addColorStop(1, 'rgba(0, 129, 255, 0)');
				return gradient;
			},
			pointRadius: 5,
			pointHoverRadius: 7,
			pointBackgroundColor: Array.from({length: 24}).map((item) => {
				return 'rgb(0, 129, 255)';
			}),
		},
	],
};

// 각 날짜별 연령대별 비율 (도넛 차트 데이터)
export const weeklyAgeGroupData: TdoughnutDataType = {};
weeklyData.labels.forEach((label) => {
	weeklyAgeGroupData[label] = [
		Math.floor(Math.random() * 100) + 1, // 10대
		Math.floor(Math.random() * 100) + 1, // 20대
		Math.floor(Math.random() * 100) + 1, // 30대
		Math.floor(Math.random() * 100) + 1, // 40대 이상
	];
});

// 1개월 동안의 시간대별 상담 건수 (0~24시, 31일)
export const monthlyData = {
	labels: Array.from({length: 31}, (_, i) => `${i + 1}`),
	datasets: [
		{
			label: '상담 건수',
			data: Array.from(
				{length: 31},
				() => Math.floor(Math.random() * 100) + 10,
			), // 10~110 사이의 랜덤 상담 건수
			fill: 'start',
			backgroundColor: (context: ScriptableContext<'line'>) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 200);
				gradient.addColorStop(0, 'rgba(0, 129, 255, 0.3)');
				gradient.addColorStop(1, 'rgba(0, 129, 255, 0)');
				return gradient;
			},
			pointRadius: 5,
			pointHoverRadius: 7,
			pointBackgroundColor: Array.from({length: 24}).map((item) => {
				return 'rgb(0, 129, 255)';
			}),
		},
	],
};

// 각 날짜별 연령대별 비율 (도넛 차트 데이터)
export const monthlyAgeGroupData: TdoughnutDataType = {};
monthlyData.labels.forEach((label) => {
	monthlyAgeGroupData[label] = [
		Math.floor(Math.random() * 100) + 1, // 10대
		Math.floor(Math.random() * 100) + 1, // 20대
		Math.floor(Math.random() * 100) + 1, // 30대
		Math.floor(Math.random() * 100) + 1, // 40대 이상
	];
});

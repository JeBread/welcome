import {ScriptableContext} from 'chart.js';

type TdoughnutDataType = {
	[key: string]: number[];
};

//라인차트에 들어갈 도넛차트 배열 데이터의 총 합 계산
function calculateSum(data: TdoughnutDataType): number[] {
	return Object.values(data).map((arr) => {
		return arr.reduce((acc, cur) => acc + cur, 0);
	});
}

//가장 마지막 포인트 컬러가 붉게 변경
function resetPointColor(num: number): string[] {
	let colors = [];
	for (let i = 0; i < num - 1; i++) {
		colors.push('rgb(0,129,255)');
	}
	colors.push('rgb(253, 84, 84)');
	return colors;
}

// 각 시간대별 연령대별 비율 (도넛 차트 데이터)
export const dailyAgeGroupData: TdoughnutDataType = {};
const thisHour = new Date().getHours();

// 오늘 시간 배열을 순서대로 생성
const todayHour = Array.from({length: thisHour + 1}, (_, i) => `${i}:00`);

// 어제 시간 배열을 순서대로 생성
const yesterdayHour = Array.from(
	{length: 24 - thisHour - 1},
	(_, i) => `${thisHour + 1 + i}:00`,
);

// 두 배열을 결합하여 순서대로 나열
const hourArr = [...yesterdayHour, ...todayHour];

Array.from({length: 24}, (_, i) => `${i}`).forEach((label) => {
	dailyAgeGroupData[label] = [
		Math.floor(Math.random() * 100) + 1, // 10대
		Math.floor(Math.random() * 100) + 1, // 20대
		Math.floor(Math.random() * 100) + 1, // 30대
		Math.floor(Math.random() * 100) + 1, // 40대 이상
	];
});

// 1일 동안의 시간대별 상담 건수 (0~24시)
export const dailyData = {
	labels: hourArr,
	datasets: [
		{
			label: '상담 건수',
			data: calculateSum(dailyAgeGroupData),
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
			pointBackgroundColor: resetPointColor(24),
			textColor: '#D1D1DF',
		},
	],
};

// 각 날짜별 연령대별 비율 (도넛 차트 데이터)
export const weeklyAgeGroupData: TdoughnutDataType = {};
Array.from({length: 7}, (_, i) => `${i}`).forEach((label) => {
	weeklyAgeGroupData[label] = [
		Math.floor(Math.random() * 100) + 1, // 10대
		Math.floor(Math.random() * 100) + 1, // 20대
		Math.floor(Math.random() * 100) + 1, // 30대
		Math.floor(Math.random() * 100) + 1, // 40대 이상
	];
});

// 1주일 동안의 시간대별 상담 건수 (0~24시, 7일)
export const weeklyData = {
	labels: Array.from({length: 7}, (_, i) => `${i + 12}`),
	datasets: [
		{
			label: '상담 건수',
			data: calculateSum(weeklyAgeGroupData),
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
			pointBackgroundColor: resetPointColor(7),
		},
	],
};

// 각 날짜별 연령대별 비율 (도넛 차트 데이터)
export const monthlyAgeGroupData: TdoughnutDataType = {};
Array.from({length: 30}, (_, i) => `${i}`).forEach((label) => {
	monthlyAgeGroupData[label] = [
		Math.floor(Math.random() * 100) + 1, // 10대
		Math.floor(Math.random() * 100) + 1, // 20대
		Math.floor(Math.random() * 100) + 1, // 30대
		Math.floor(Math.random() * 100) + 1, // 40대 이상
	];
});

// 1개월 동안의 시간대별 상담 건수 (0~24시, 30일)
export const monthlyData = {
	labels: [
		...Array.from({length: 12}, (_, i) => `${i + 19}`),
		...Array.from({length: 18}, (_, i) => `${i + 1}`),
	],
	datasets: [
		{
			label: '상담 건수',
			data: Object.values(monthlyAgeGroupData).map((arr) => {
				return arr.reduce((acc, cur) => acc + cur, 0);
			}), // montlyAgeGroupData 각각의 배열을 더한 배열 return
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
			pointBackgroundColor: resetPointColor(30),
		},
	],
};

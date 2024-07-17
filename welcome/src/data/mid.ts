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

// 각 날짜별 연령대별 비율 (도넛 차트 데이터)
export const weeklyAgeGroupData: TdoughnutDataType = {
	'12': [65, 9, 5, 11],
	'13': [95, 99, 54, 46],
	'14': [41, 52, 2, 3],
	'15': [47, 85, 89, 85],
	'16': [8, 2, 31, 15],
	'17': [11, 71, 80, 72],
	'18': [30, 52, 56, 23],
};
// 1주일 동안의 시간대별 상담 건수 (0~24시, 7일)
export const weeklyData = {
	labels: Array.from({length: 7}, (_, i) => `${i + 1}`),
	datasets: [
		{
			label: '상담 건수',
			data: [294, 294, 274, 56, 234, 161, 161], // 10~110 사이의 랜덤 상담 건수
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
export const monthlyAgeGroupData: TdoughnutDataType = {
	'19': [76, 93, 16, 88],
	'20': [37, 79, 91, 65],
	'21': [21, 86, 11, 73],
	'22': [93, 55, 36, 48],
	'23': [61, 43, 93, 49],
	'24': [16, 100, 60, 87],
	'25': [60, 41, 48, 60],
	'26': [69, 81, 58, 41],
	'27': [47, 28, 81, 54],
	'28': [78, 14, 61, 97],
	'29': [6, 61, 50, 72],
	'30': [17, 62, 52, 38],
	'1': [14, 94, 68, 55],
	'2': [78, 100, 98, 94],
	'3': [70, 77, 47, 51],
	'4': [25, 32, 87, 94],
	'5': [41, 34, 71, 89],
	'6': [99, 56, 16, 81],
	'7': [36, 28, 24, 51],
	'8': [25, 92, 27, 13],
	'9': [77, 73, 3, 34],
	'10': [5, 76, 65, 90],
	'11': [30, 83, 82, 2],
	'12': [65, 9, 5, 11],
	'13': [95, 99, 54, 46],
	'14': [41, 52, 2, 3],
	'15': [47, 85, 89, 85],
	'16': [8, 2, 31, 15],
	'17': [11, 71, 80, 72],
	'18': [30, 52, 56, 23],
};

// 1개월 동안의 시간대별 상담 건수 (0~24시, 31일)
export const monthlyData = {
	labels: [
		...Array.from({length: 12}, (_, i) => `${i + 19}`),
		...Array.from({length: 18}, (_, i) => `${i + 1}`),
	],
	datasets: [
		{
			label: '상담 건수',
			data: [
				273, 272, 191, 232, 246, 263, 209, 249, 210, 250, 189, 231, 231, 370,
				245, 238, 235, 252, 157, 187, 234, 197, 90, 294, 294, 274, 56, 234, 161,
				161,
			],
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

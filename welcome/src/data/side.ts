import type {IsideData} from '@/types/data';

export const sideData: IsideData[] = [
	{
		icon: 'home',
		title: '메인',
	},
	{
		icon: 'center',
		title: '상담사 현황',
		sub: ['상담사 리스트', '상담사 스케줄', '상담사 성과', '상담사 평가'],
	},
	{
		icon: 'log',
		title: '채팅 로그',
		sub: ['전체 로그', '고객 별 로그', '기간 별 로그'],
	},
];

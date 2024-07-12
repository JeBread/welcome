import {ItopData} from '@/types/data';

export const topData: ItopData[] = [
	{
		title: '승인대기',
		state: 'normal',
		case: 15,
		icon: 'pending',
		emphasize: '15',
		description: ['현재', '건의 요청이 대기중입니다.'],
		descriptionIcon: 'wait',
	},
	{
		title: '반려',
		state: 'bad',
		case: 100,
		icon: 'reject',
		emphasize: '2.1% 증가',
		description: ['어제보다', '했어요'],
		descriptionIcon: 'angry',
	},
	{
		title: '승인',
		state: 'good',
		case: 100,
		icon: 'success',
		emphasize: '3.5% 증가',
		description: ['어제보다', '했어요'],
		descriptionIcon: 'bigsmile',
	},
	{
		title: '상담사 전환',
		state: 'normal',
		case: 100,
		default: 20,
		suffix: '명',
		icon: 'call',
		emphasize: '보통',
		description: ['현재 상담사 대기 시간이 ', '이에요'],
		descriptionIcon: 'smile',
	},
];

interface IsideData {
	icon: string;
	title: string;
	sub?: string[];
}

export const sideData = [
	{
		icon: 'home',
		title: '메인',
	},
	{
		icon: 'center',
		title: '상담사 현황',
		sub: ['상담사 관리', '상담사 목록', '상담 처리 현황'],
	},
	{
		icon: 'log',
		title: '채팅 로그',
	},
];

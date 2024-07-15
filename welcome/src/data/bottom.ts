// interface IbotData {
// 	title: string;
// 	state: string;
// 	case: number;
// 	default?: number;
// 	suffix?: string;
// 	icon: string;
// 	emphasize: string;
// 	description: string[];
// 	descriptionIcon: string;
// }

interface aiReport {
	inquiryType: string;
	total: number;
	contents: string;
}

export const aiReportList: aiReport[] = [
	{
		inquiryType: '배송',
		total: 180,
		contents: ' 배송이 늦다',
	},
	{
		inquiryType: '환불',
		total: 160,
		contents: ' 가격이 비싸다',
	},
	{
		inquiryType: '영상 오류',
		total: 70,
		contents: ' 영상이 안 나옵니다',
	},
];

interface Inquiry {
	inquiryNo: number;
	inquiryType: string;
	memberID: string;
	spanTime: string;
	inquiryDate: string;
	inquiryStatus: string;
}

export const inquiryList: Inquiry[] = [
	{
		inquiryNo: 1864,
		inquiryType: '배송',
		memberID: 'abc1234',
		spanTime: '6m 51s',
		inquiryDate: '2024.07.12 14:03',
		inquiryStatus: '승인대기',
	},
	{
		inquiryNo: 1863,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '5m 22s',
		inquiryDate: '2024.07.11 17:56',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1862,
		inquiryType: '배송',
		memberID: 'qwer317',
		spanTime: '7m 25s',
		inquiryDate: '2024.07.11 13:28',
		inquiryStatus: '반려',
	},
	{
		inquiryNo: 1861,
		inquiryType: '환불',
		memberID: 'newpp',
		spanTime: '4m 10s',
		inquiryDate: '2024.07.10 09:56',
		inquiryStatus: '반려',
	},
	{
		inquiryNo: 1860,
		inquiryType: '영상 오류',
		memberID: 'jebread',
		spanTime: '3m 28s',
		inquiryDate: '2024.07.09 15:42',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1859,
		inquiryType: '배송',
		memberID: 'newpp',
		spanTime: '2m 10s',
		inquiryDate: '2024.07.08 16:10',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1858,
		inquiryType: '환불',
		memberID: 'abc1234',
		spanTime: '7m 14s',
		inquiryDate: '2024.07.07 12:10',
		inquiryStatus: '승인대기',
	},
	{
		inquiryNo: 1857,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1856,
		inquiryType: '배송',
		memberID: 'abc1234',
		spanTime: '3m 07s',
		inquiryDate: '2024.07.05 14:40',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1855,
		inquiryType: '영상 오류',
		memberID: 'newpp',
		spanTime: '5m 36s',
		inquiryDate: '2024.07.05 11:12',
		inquiryStatus: '반려',
	},
	// 여기까지 10개(환불4개, 배송4개, 영상오류2개)
	{
		inquiryNo: 1854,
		inquiryType: '환불',
		memberID: 'qwer317',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1853,
		inquiryType: '환불',
		memberID: 'abc1234',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1852,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1851,
		inquiryType: '환불',
		memberID: 'qwer317',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1850,
		inquiryType: '환불',
		memberID: 'newpp',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1849,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1848,
		inquiryType: '환불',
		memberID: 'abc1234',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1847,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1846,
		inquiryType: '환불',
		memberID: 'newpp',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1845,
		inquiryType: '환불',
		memberID: 'newpp',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	// 여기까지 20개(환불6개, 배송3개, 영상오류1개)
	{
		inquiryNo: 1844,
		inquiryType: '환불',
		memberID: 'abc1234',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1843,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1842,
		inquiryType: '환불',
		memberID: 'qwer317',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1841,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1840,
		inquiryType: '환불',
		memberID: 'abc1234',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1839,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1838,
		inquiryType: '환불',
		memberID: 'newpp',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1837,
		inquiryType: '환불',
		memberID: 'newpp',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1836,
		inquiryType: '환불',
		memberID: 'abc1234',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1835,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.05 15:03',
		inquiryStatus: '승인',
	},
];

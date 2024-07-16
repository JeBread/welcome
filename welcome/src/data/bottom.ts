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
	{
		inquiryNo: 1854,
		inquiryType: '환불',
		memberID: 'qwer317',
		spanTime: '3m 17s',
		inquiryDate: '2024.07.05 07:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1853,
		inquiryType: '환불',
		memberID: 'abc1234',
		spanTime: '8m 12s',
		inquiryDate: '2024.07.04 22:10',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1852,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '5m 51s',
		inquiryDate: '2024.07.04 21:09',
		inquiryStatus: '승인대기',
	},
	{
		inquiryNo: 1851,
		inquiryType: '배송',
		memberID: 'qwer317',
		spanTime: '4m 15s',
		inquiryDate: '2024.07.04 20:26',
		inquiryStatus: '승인대기',
	},
	{
		inquiryNo: 1850,
		inquiryType: '환불',
		memberID: 'newpp',
		spanTime: '8m 36s',
		inquiryDate: '2024.07.04 20:00',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1849,
		inquiryType: '영상 오류',
		memberID: 'jebread',
		spanTime: '8m 17s',
		inquiryDate: '2024.07.04 18:38',
		inquiryStatus: '반려',
	},
	{
		inquiryNo: 1848,
		inquiryType: '환불',
		memberID: 'abc1234',
		spanTime: '7m 55s',
		inquiryDate: '2024.07.04 17:55',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1847,
		inquiryType: '환불',
		memberID: 'jebread',
		spanTime: '5m 24s',
		inquiryDate: '2024.07.04 15:41',
		inquiryStatus: '승인대기',
	},
	{
		inquiryNo: 1846,
		inquiryType: '배송',
		memberID: 'newpp',
		spanTime: '5m 16s',
		inquiryDate: '2024.07.04 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1845,
		inquiryType: '영상 오류',
		memberID: 'newpp',
		spanTime: '1m 56s',
		inquiryDate: '2024.07.04 12:27',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1844,
		inquiryType: '영상 오류',
		memberID: 'abc1234',
		spanTime: '2m 21s',
		inquiryDate: '2024.07.04 11:03',
		inquiryStatus: '반려',
	},
	{
		inquiryNo: 1843,
		inquiryType: '배송',
		memberID: 'jebread',
		spanTime: '2m 36s',
		inquiryDate: '2024.07.04 10:10',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1842,
		inquiryType: '배송',
		memberID: 'qwer317',
		spanTime: '3m 15s',
		inquiryDate: '2024.07.04 08:27',
		inquiryStatus: '승인대기',
	},
	{
		inquiryNo: 1841,
		inquiryType: '영상 오류',
		memberID: 'jebread',
		spanTime: '2m 20s',
		inquiryDate: '2024.07.04 06:43',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1840,
		inquiryType: '배송',
		memberID: 'abc1234',
		spanTime: '3m 04s',
		inquiryDate: '2024.07.03 23:00',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1839,
		inquiryType: '영상 오류',
		memberID: 'jebread',
		spanTime: '2m 30s',
		inquiryDate: '2024.07.03 20:42',
		inquiryStatus: '승인대기',
	},
	{
		inquiryNo: 1838,
		inquiryType: '영상 오류',
		memberID: 'newpp',
		spanTime: '1m 12s',
		inquiryDate: '2024.07.03 19:18',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1837,
		inquiryType: '영상 오류',
		memberID: 'newpp',
		spanTime: '3m 40s',
		inquiryDate: '2024.07.03 18:57',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1836,
		inquiryType: '배송',
		memberID: 'abc1234',
		spanTime: '1m 26s',
		inquiryDate: '2024.07.03 15:03',
		inquiryStatus: '승인',
	},
	{
		inquiryNo: 1835,
		inquiryType: '영상 오류',
		memberID: 'jebread',
		spanTime: '3m 08s',
		inquiryDate: '2024.07.02 15:03',
		inquiryStatus: '승인',
	},
	// 여기까지 30개(환불 10개, 배송 10개, 영상오류 10개)
];

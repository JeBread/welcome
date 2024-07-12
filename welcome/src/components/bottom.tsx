import React from 'react';
import Image from 'next/image';
// import {useState} from 'react';

// export default function Bottom({item}: {item: any}) {
// 	return <div className='bg-gray-200 p-2'>{item}</div>;
// }

export default function Bottom(item: any) {
	interface aiReport {
		inquiryType: string;
		contents: string;
	}

	const aiReportList: aiReport[] = [
		{
			inquiryType: '배송',
			contents: '배송이 늦다.',
		},
		{
			inquiryType: '환불',
			contents: '가격이 비싸다.',
		},
		{
			inquiryType: '영상 오류',
			contents: '영상이 재생되지 않습니다.',
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

	const inquiryList: Inquiry[] = [
		{
			inquiryNo: 1864,
			inquiryType: '배송',
			memberID: 'newpp',
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
			memberID: 'jebread',
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
			memberID: 'jebread',
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
	];
	// 주요 문의 유형 TOP3
	// const [top3NqryList, setTop3NqryList] = useState<Inquiry[]>([]);
	// const [selectedNqryType, setSelectedNqryType] = useState<string>(''); // 선택된 문의 유형
	// const [selectedTotalNqry, setSelectedTotalNqry] = useState<number>(0); // 선택된 문의 유형의 총 건수
	// const [selectedNqryReport, setSelectedNqryReport] = useState<string>(''); // 선택된 문의 유형의 AI분석

	// 주요 문의 유형 TOP3 버튼을 눌렀을 때 해당 문의 유형에 테두리 색상이 변경되어야 하고
	// 그림자가 나타나야 합니다.
	// 또한, 아래의 리스트는 해당 문의 유형에 대한 리스트를 보여주어야 합니다.
	// 또한, 좌측의 AI 분석 리포트에서 [해당 문의 유형]이 [해당 문의 유형의 건수] 로 변경되어야 하며,
	// [해당 문의 유형의 AI 분석]이 나타나야 합니다.
	// 아래의 리스트에서 처리상태 '승인'은 green, '반려'는 red, '승인대기'는 yellow으로 표시되어야 합니다.
	// 상세 보기의 [보기] 버튼에 hover시 테두리와 텍스트 색상이 변경되어야 합니다. -> blue
	//

	return (
		<div className='flex w-full flex-row justify-center bg-white'>
			<div className='relative h-[507.5px] w-[1611px] bg-white'>
				<div className='absolute left-[22px] top-[21px] w-[212px] text-xl font-medium leading-5 tracking-normal text-black'>
					상세 문의 내역
				</div>
				<div className='absolute left-[22px] top-[199px] h-[290px] w-[1577px]'>
					<div className='absolute left-[1393px] top-0 h-[35px] w-[95px] rounded border border-solid border-[#d9d9d9]' />
					<div className='absolute left-0 top-0 h-[290px] w-[1577px]'>
						<div className='relative h-[290px] w-[1567px]'>
							<div className='absolute left-0 top-0 h-[290px] w-[1567px]'>
								<div className='absolute left-0 top-[232px] h-[58px] w-[1567px]'>
									<div className='h-[58px] w-[1569px]'>
										<div className='relative h-[58px] w-[1577px]'>
											<div className='absolute left-0 top-0 h-[58px] w-[1577px]'>
												<div className='relative -left-px -top-px h-[60px] w-[1569px] rounded-xl bg-[#f5f6f882]'>
													<div className='absolute left-9 top-[19px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[7].inquiryNo}
													</div>
													<div className='absolute left-56 top-[19px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[7].inquiryType}
													</div>
													<div className='absolute left-[414px] top-[19px] w-[52px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[7].memberID}
													</div>
													<div className='absolute left-[626px] top-[19px] w-[65px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[7].spanTime}
													</div>
													<div className='absolute left-[851px] top-[19px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[7].inquiryDate}
													</div>
												</div>
											</div>
											<div className='absolute left-[1157px] top-5 w-[62px] text-center text-sm font-bold leading-[normal] tracking-normal text-[#00b69b] '>
												{inquiryList[7].inquiryStatus}
											</div>
										</div>
									</div>
								</div>
								<div className='absolute left-0 top-0 h-[58px] w-[1579px]'>
									<div className='relative -left-px -top-px h-[60px] w-[1569px] rounded-xl bg-[#f5f6f8]'>
										<div className='absolute left-9 top-[19px] w-[88px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
											No.
										</div>
										<div className='absolute left-[196px] top-[19px] w-[87px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
											문의 유형
										</div>
										<div className='absolute left-[414px] top-[19px] w-[52px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
											회원 ID
										</div>
										<div className='absolute left-[626px] top-[19px] w-[65px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
											소요 시간
										</div>
										<div className='absolute left-[883px] top-[19px] w-[65px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
											문의 일시
										</div>
										<div className='absolute left-[1158px] top-[19px] w-[65px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
											처리 상태
										</div>
									</div>
								</div>
								<div className='absolute left-0 top-[58px] h-[58px] w-[1567px]'>
									<div className='h-[58px] w-[1569px]'>
										<div className='relative h-[58px] w-[1577px]'>
											<div className='absolute left-0 top-0 h-[58px] w-[1577px]'>
												<div className='relative -left-px -top-px h-[60px] w-[1569px] rounded-xl bg-white'>
													<div className='absolute left-9 top-[19px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[1].inquiryNo}
													</div>
													<div className='absolute left-56 top-[19px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[1].inquiryType}
													</div>
													<div className='absolute left-[414px] top-[19px] w-[52px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[1].memberID}
													</div>
													<div className='absolute left-[626px] top-[19px] w-[65px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[1].spanTime}
													</div>
													<div className='absolute left-[851px] top-[19px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[1].inquiryDate}
													</div>
												</div>
											</div>
											<div className='absolute left-[1157px] top-5 w-[62px] text-center text-sm font-bold leading-[normal] tracking-normal text-[#00b69b] '>
												{inquiryList[1].inquiryStatus}
											</div>
										</div>
									</div>
								</div>
								<div className='absolute left-0 top-[116px] h-[58px] w-[1567px]'>
									<div className='h-[58px] w-[1569px]'>
										<div className='relative h-[58px] w-[1577px]'>
											<div className='absolute left-0 top-0 h-[58px] w-[1577px]'>
												<div className='relative -left-px -top-px h-[60px] w-[1569px] rounded-xl bg-[#f5f6f882]'>
													<div className='absolute left-9 top-[19px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[3].inquiryNo}
													</div>
													<div className='absolute left-56 top-[19px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[3].inquiryType}
													</div>
													<div className='absolute left-[414px] top-[19px] w-[52px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[3].memberID}
													</div>
													<div className='absolute left-[626px] top-[19px] w-[65px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[3].spanTime}
													</div>
													<div className='absolute left-[851px] top-[19px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[3].inquiryDate}
													</div>
												</div>
											</div>
											<div className='absolute left-[1157px] top-5 w-[62px] text-center text-sm font-bold leading-[normal] tracking-normal text-[#fd5454] '>
												{inquiryList[3].inquiryStatus}
											</div>
										</div>
									</div>
								</div>
								<div className='absolute left-0 top-[174px] h-[58px] w-[1567px]'>
									<div className='h-[58px] w-[1569px]'>
										<div className='relative h-[58px] w-[1577px]'>
											<div className='absolute left-0 top-0 h-[58px] w-[1577px]'>
												<div className='relative -left-px -top-px h-[60px] w-[1569px] rounded-xl bg-white'>
													<div className='absolute left-9 top-[19px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[6].inquiryNo}
													</div>
													<div className='absolute left-56 top-[19px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[6].inquiryType}
													</div>
													<div className='absolute left-[414px] top-[19px] w-[52px] text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[6].memberID}
													</div>
													<div className='absolute left-[626px] top-[19px] w-[65px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[6].spanTime}
													</div>
													<div className='absolute left-[851px] top-[19px] text-center text-base font-medium leading-[normal] tracking-normal text-[#636566] '>
														{inquiryList[6].inquiryDate}
													</div>
												</div>
											</div>
											<div className='absolute left-[1157px] top-5 w-[62px] text-center text-sm font-bold leading-[normal] tracking-normal text-[#fcbe2d] '>
												{inquiryList[6].inquiryStatus}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='absolute left-[1393px] top-[127px] h-[35px] w-[95px] rounded border border-solid border-[#6365664a]' />
							<div className='absolute left-[1393px] top-[185px] h-[35px] w-[95px] rounded border border-solid border-[#6365664a]' />
							<div className='absolute left-[1393px] top-[243px] h-[35px] w-[95px] rounded border border-solid border-[#6365664a]' />
							<div className='absolute left-[1413px] top-[18px] text-center text-sm font-bold leading-[normal] tracking-normal text-[#636566] '>
								상세 보기
							</div>
							<div className='absolute left-[1427px] top-[76px] text-center text-sm font-bold leading-[normal] tracking-normal text-[#636566] '>
								보기
							</div>
							<div className='absolute left-[1427px] top-[134px] text-center text-sm font-bold leading-[normal] tracking-normal text-[#636566] '>
								보기
							</div>
							<div className='absolute left-[1427px] top-48 text-center text-sm font-bold leading-[normal] tracking-normal text-[#636566] '>
								보기
							</div>
							<div className='absolute left-[1427px] top-[250px] text-center text-sm font-bold leading-[normal] tracking-normal text-[#636566] '>
								보기
							</div>
							<div className='absolute left-[1393px] top-[69px] h-[35px] w-[95px] rounded border border-solid border-[#6365664a]' />
						</div>
					</div>
				</div>
				<div className='absolute left-[22px] top-[67px] h-[92px] w-[755px] rounded-lg bg-[#fafafb]'>
					<p className='absolute left-[29px] top-4 text-base font-normal leading-[25.6px] tracking-normal text-transparent '>
						<span className='font-medium text-[#636566]'>최근 1주일간 </span>
						<span className='font-bold text-[#fd5454] '>환불 요청이 160건</span>
						<span className='font-medium text-[#636566]'>
							{' '}
							이었습니다. <br />
							부정적인 의견 중에서는{' '}
						</span>
						<span className='font-bold text-[#fd5454] '>가격이 비싸다</span>
						<span className='font-medium text-[#636566]'>
							는 의견이 가장 많습니다.
						</span>
					</p>
				</div>
				<div className='absolute left-[840px] top-[19px] w-[212px] text-xl font-medium leading-5 tracking-normal text-black '>
					주요 문의 유형 TOP3
				</div>
				<div className='absolute left-[818px] top-[67px] h-[94px] w-[771px]'>
					<div className='absolute left-0 top-0 h-[94px] w-[771px]'>
						<div className='absolute left-[532px] top-0 h-[94px] w-[239px] rounded-[10px] bg-[#fafafb]'>
							<div className='absolute left-[100px] top-[27px] h-11 w-[105px]'>
								<div className='relative h-11 w-[109px]'>
									<div className='text-text absolute left-0 top-0 w-[105px] text-base font-medium leading-[normal] tracking-normal opacity-70 '>
										영상 오류
									</div>
									<div className='text-text absolute left-0 top-[26px] w-[47px] text-sm font-normal leading-[normal] tracking-normal opacity-70 '>
										70건
									</div>
								</div>
							</div>
							<div className='absolute left-[26px] top-[23px] size-[52px] rounded-[38px] bg-[#ff8f6b1a]' />
						</div>
						<div className='absolute left-[266px] top-0 h-[94px] w-[239px] rounded-[10px] border border-solid border-[#0081ff] bg-[#fafafb] shadow-[0px_6px_30px_#204f7d1f]'>
							<div className='absolute left-[98px] top-[26px] h-11 w-[62px]'>
								<div className='text-text absolute left-0 top-0 w-[58px] text-base font-medium leading-[normal] tracking-normal opacity-70 '>
									환불
								</div>
								<div className='text-text absolute left-0 top-[25px] w-[47px] text-sm font-normal leading-[normal] tracking-normal opacity-70 '>
									160건
								</div>
							</div>
							<div className='absolute left-6 top-[22px] size-[52px] rounded-[38px] bg-[#ffd56b33]' />
						</div>
						<div className='absolute left-0 top-0 h-[94px] w-[239px] rounded-[10px] bg-[#fafafb]'>
							<div className='absolute left-[99px] top-[26px] h-[46px] w-[57px]'>
								<div className='relative h-[46px] w-[61px]'>
									<div className='absolute left-0 top-0 w-[57px] text-base font-medium leading-[normal] tracking-normal text-black opacity-70 '>
										배송
									</div>
									<div className='text-text absolute left-0 top-[27px] w-[47px] text-sm font-normal leading-[normal] tracking-normal opacity-70 '>
										180건
									</div>
								</div>
							</div>
							<div className='absolute left-[25px] top-[23px] size-[52px] rounded-[38px] bg-[#5b92ff1a]' />
						</div>
					</div>
					<Image
						className='absolute left-[570px] top-[35px]'
						alt='ErrorIcon'
						src='/bottom/errorIcon.png'
						width={28}
						height={28}
					/>
					<Image
						className='absolute left-[305px] top-[37px]'
						alt='refundIcon'
						src='/bottom/refundIcon.png'
						width={24}
						height={24}
					/>
					<Image
						className='absolute left-[39px] top-9'
						alt='deliveryIcon'
						src='/bottom/deliveryIcon.png'
						width={24}
						height={24}
					/>
				</div>
			</div>
		</div>
	);
}

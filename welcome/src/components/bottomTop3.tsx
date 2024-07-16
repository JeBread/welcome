import React from 'react';
// import {Icon} from './Icon';
// import {Card, CardHeader, Image} from '@nextui-org/react';
// import {PiPackageBold} from 'react-icons/pi';
import BotTest from './botTest';
import {aiReportList} from '@/data/bottom';

export default function BottomTop3() {
	return (
		<>
			<div className='ml-11'>
				<div>
					<h2 className='relative left-[29px] top-[10px] text-[20px] font-medium text-black'>
						주요 문의 유형 TOP3
					</h2>
				</div>
				<div className='mt-10 flex gap-4'>
					{aiReportList.map((item: any, index: number) => (
						<BotTest key={index} item={item} />
					))}
				</div>
				{/* <div className='mt-4 flex justify-between'>
					<div className='absolute left-[818px] top-[67px] h-[94px] w-[771px]'>
						<div className='absolute left-0 top-0 h-[94px] w-[771px]'>
							<div className='absolute left-[532px] top-0 h-[94px] w-[239px] cursor-pointer rounded-[10px] bg-gray-100 hover:border hover:border-blue-900 hover:bg-white hover:shadow-[0px_6px_30px_#204f7d1f]'>
								<div className='absolute left-[100px] top-[27px] h-11 w-[105px]'>
									<div className='relative h-11 w-[109px]'>
										<div className='absolute left-0 top-0 w-[105px] text-base font-medium leading-[normal] tracking-normal text-gray-900 '>
											영상 오류
										</div>
										<div className='absolute left-0 top-[26px] w-[47px] text-sm font-normal leading-[normal] tracking-normal text-gray-900'>
											70건
										</div>
									</div>
								</div>
								<div className='absolute left-[26px] top-[23px] size-[52px] rounded-[38px] bg-blue-100' />
							</div>
							<div className='absolute left-[266px] top-0 h-[94px] w-[239px] cursor-pointer rounded-[10px] border border-solid border-blue-900 bg-[#fafafb] shadow-[0px_6px_30px_#204f7d1f]'>
								<div className='absolute left-[98px] top-[26px] h-11 w-[62px]'>
									<div className='absolute left-0 top-0 w-[58px] font-medium leading-[normal] tracking-normal text-black'>
										환불
									</div>
									<div className='absolute left-0 top-[25px] w-[47px] text-sm font-normal leading-[normal] tracking-normal text-gray-900'>
										160건
									</div>
								</div>
								<div className='absolute left-6 top-[22px] size-[52px] rounded-[38px] bg-blue-100' />
							</div>
							<div className='absolute left-0 top-0 h-[94px] w-[239px] rounded-[10px] bg-gray-100 hover:border hover:border-blue-900 hover:bg-white hover:text-black hover:shadow-[0px_6px_30px_#204f7d1f]'>
								<div className='absolute left-[99px] top-[26px] h-[46px] w-[57px]'>
									<div className='relative h-[46px] w-[61px]'>
										<div className='absolute left-0 top-0 w-[57px] cursor-pointer text-base font-medium leading-[normal] tracking-normal text-gray-900'>
											배송
										</div>
										<div className='absolute left-0 top-[27px] w-[47px] text-sm font-normal leading-[normal] tracking-normal'>
											180건
										</div>
									</div>
								</div>
								<div className='absolute left-[25px] top-[23px] size-[52px] rounded-[38px] bg-blue-100' />
							</div>
						</div>
						<Image
							className='absolute left-[570px] top-[35px]'
							alt='ErrorIcon'
							src='/bottom/errorIcon.svg'
							width={28}
							height={28}
						/>
						<Image
							className='absolute left-[305px] top-[37px]'
							alt='refundIcon'
							src='/bottom/refundIcon.svg'
							width={24}
							height={24}
						/>
						<Image
							className='absolute left-[39px] top-9'
							alt='deliveryIcon'
							src='/bottom/deliveryIcon.svg'
							width={24}
							height={24}
						/>
					</div> */}

				{/* <div className='relative mt-6 flex h-[94px] w-[771px] justify-between'>
					<div className='flex size-full'>
						<div className='flex h-full w-[239px] cursor-pointer flex-col justify-between rounded-[10px] bg-gray-100 p-4 hover:border hover:border-blue-900 hover:bg-white hover:shadow-[0px_6px_30px_#204f7d1f]'>
							<div className='flex flex-col items-center'>
								<Icon icon='package' />
								<div className='text-base font-medium leading-[normal] tracking-normal text-gray-900'>
									배송
								</div>
								<div className='mt-2 text-sm font-normal leading-[normal] tracking-normal text-gray-900'>
									180건
								</div>
							</div>
							<div className=' size-[52px] rounded-[38px] bg-blue-100'></div>
						</div>
						<div className='mx-4 flex h-full w-[239px] cursor-pointer flex-col justify-between rounded-[10px] border border-solid border-blue-900 bg-[#fafafb] p-4 shadow-[0px_6px_30px_#204f7d1f]'>
							<div className='flex flex-col items-center'>
								<Icon icon='refund' />
								<div className='font-medium leading-[normal] tracking-normal text-black'>
									환불
								</div>
								<div className='mt-2 text-sm font-normal leading-[normal] tracking-normal text-gray-900'>
									160건
								</div>
							</div>
						</div>
						<div className='flex h-full w-[239px] cursor-pointer flex-col justify-between rounded-[10px] bg-gray-100 p-4 hover:border hover:border-blue-900 hover:bg-white hover:text-black hover:shadow-[0px_6px_30px_#204f7d1f]'>
							<div className='flex flex-col items-center'>
								<div className=' size-[52px] rounded-[38px] bg-blue-100'>
									<Icon icon='alert' />
								</div>
								<div className='text-base font-medium leading-[normal] tracking-normal text-gray-900'>
									영상 오류
								</div>
								<div className='mt-2 text-sm font-normal leading-[normal] tracking-normal'>
									70건
								</div>
							</div>
							<div className='mt-4 size-[52px] rounded-[38px] bg-blue-100'></div>
						</div>
					</div>
				</div> */}

				{/* nextUI Card 방식 */}
				{/* <Card className='max-w-[400px] cursor-pointer bg-gray-100'>
						<CardHeader className='flex gap-3'>
							<Icon icon='package' />
							<div className='flex flex-col'>
								<p className='text-md'>배송</p>
								<p className='text-small text-default-500'>180건</p>
							</div>
						</CardHeader>
					</Card>
					<Card className='max-w-[400px] cursor-pointer bg-gray-100'>
						<CardHeader className='flex gap-3'>
							<Icon icon='refund' />
							<div className='flex flex-col'>
								<p className='text-md'>환불</p>
								<p className='text-small text-default-500'>160건</p>
							</div>
						</CardHeader>
					</Card>
					<Card className='max-w-[400px] cursor-pointer bg-gray-100'>
						<CardHeader className='flex gap-3'>
							<Icon icon='alert' />
							<div className='flex flex-col'>
								<p className='text-md'>영상 오류</p>
								<p className='text-small text-default-500'>70건</p>
							</div>
						</CardHeader>
					</Card> */}

				{/* 기존 개별 박스 방식 */}
				{/* <div className='shadow-box relative inset-0 flex cursor-pointer flex-col rounded-[16px] bg-gray-100 px-[22px] pb-[24px] pt-[22px]'>
						배송
						<div className='absolute right-[22px] top-[22px]'>
							<div className='flex size-[84px] items-center justify-center rounded-[20px]'>
								<Icon icon='package' />
							</div>
						</div>
					</div>
					<div className='shadow-box relative inset-0 flex cursor-pointer flex-col rounded-[16px] bg-gray-100 px-[22px] pb-[24px] pt-[22px]'>
						환불
						<div className='absolute right-[22px] top-[22px]'>
							<div className='flex size-[84px] items-center justify-center rounded-[20px]'>
								<Icon icon='refund' />
							</div>
						</div>
					</div>
					<div className='shadow-box relative inset-0 flex cursor-pointer flex-col rounded-[16px] bg-gray-100 px-[22px] pb-[24px] pt-[22px]'>
						영상오류
						<div className='absolute right-[22px] top-[22px]'>
							<div className='flex size-[84px] items-center justify-center rounded-[20px]'>
								<Icon icon='alert' />
							</div>
						</div>
					</div> */}
				{/* </div> */}
			</div>
		</>
	);
}

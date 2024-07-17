'use client';
import React from 'react';
import {
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';
import {TbDeviceAnalytics} from 'react-icons/tb';
import {FaRegCalendar} from 'react-icons/fa';
import {useDisclosure} from '@nextui-org/react';
import {BsPrinter} from 'react-icons/bs';

export default function BelowHeader() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	let now = new Date();

	let year = now.getFullYear(); // 년도
	let month = ('0' + (now.getMonth() + 1)).slice(-2); // 월
	let day = ('0' + now.getDate()).slice(-2); // 날짜
	let hours = ('0' + now.getHours()).slice(-2); // 시
	let minutes = ('0' + now.getMinutes()).slice(-2); // 분

	let timeString = `${year}.${month}.${day} ${hours}:${minutes}`;

	return (
		<div className='flex justify-between pl-[34px] pr-[30px] pt-[40px]'>
			<div className='flex'>
				<FaRegCalendar className='mt-[10px] size-[24px]' />
				<div className='ml-[12px] text-[28px] font-medium'>
					AI 챗봇 서비스 일별 현황
				</div>
				<div className='ml-[13px] mt-px flex items-center text-[16px]'>
					<div className='flex items-center'>
						<div className='mb-[2px] mr-[13px] font-semibold text-blue-900'>
							{' '}
							|{' '}
						</div>
						현재 {timeString} 기준
					</div>
				</div>
			</div>
			<div>
				<Button
					className='rounded-[8px] bg-blue-900 pl-[22px] pr-[26px] text-white'
					onPress={onOpen}
					// startContent={<IoAnalyticsOutline />}
					startContent={
						<TbDeviceAnalytics className='mr-[3px] mt-[1.5px] size-[18px]' />
					}>
					AI분석데이터
				</Button>
			</div>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex justify-between gap-1'>
								Modal Title
								<Button
									size='sm'
									color='warning'
									variant='shadow'
									startContent={<BsPrinter className='size-[14px]' />}
									className='mr-4 rounded-[8px] text-[12px]'>
									출력하기
								</Button>
							</ModalHeader>
							<ModalBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat
									consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
									incididunt cillum quis. Velit duis sit officia eiusmod Lorem
									aliqua enim laboris do dolor eiusmod. Et mollit incididunt
									nisi consectetur esse laborum eiusmod pariatur proident Lorem
									eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>
									닫기
								</Button>
								<Button color='primary' onPress={onClose}>
									확인
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}

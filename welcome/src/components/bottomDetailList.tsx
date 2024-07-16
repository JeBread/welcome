'use client';
import React from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from '@nextui-org/react';
import {
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react';
import {inquiryList} from '@/data/bottom';
import {useBottomStore} from '@/store/bottomStore';
import {useState, useEffect} from 'react';

export default function BottomDetailList(item: any) {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const {selectedInquiryType, setSelectedInquiryType} = useBottomStore();
	const [filteredInquiryList, setFilteredInquiryList] = useState(inquiryList);

	useEffect(() => {
		const filteredList = inquiryList.filter(
			(item) => item.inquiryType === selectedInquiryType,
		);
		setFilteredInquiryList(filteredList);
	}, [selectedInquiryType]);

	const tableColumn = [
		{title: 'No.', key: 'inquiryNo'},
		{title: '문의 유형', key: 'inquiryType'},
		{title: '회원 ID', key: 'memberID'},
		{title: '소요 시간', key: 'spanTime'},
		{title: '문의 일시', key: 'inquiryDate'},
		{title: '처리 상태', key: 'inquiryStatus'},
		{title: '상세 보기', key: 'detail'},
	];

	return (
		<div className='relative mt-4 p-2'>
			<Table isStriped aria-label='Example static collection table'>
				<TableHeader>
					{tableColumn.map((column, index) => (
						<TableColumn
							key={index}
							className='h-16 text-[16px] font-medium text-gray-900'>
							{column.title}
						</TableColumn>
					))}
				</TableHeader>
				<TableBody>
					{filteredInquiryList.map((item: any, index: number) => (
						<TableRow key={index}>
							<TableCell className='h-16 text-[16px] font-medium text-gray-900'>
								{item.inquiryNo}
							</TableCell>
							<TableCell className='text-[16px] font-medium text-gray-900'>
								{item.inquiryType}
							</TableCell>
							<TableCell className='text-[16px] font-medium text-gray-900'>
								{item.memberID}
							</TableCell>
							<TableCell className='text-[16px] font-medium text-gray-900'>
								{item.spanTime}
							</TableCell>
							<TableCell className='text-[16px] font-medium text-gray-900'>
								{item.inquiryDate}
							</TableCell>
							<TableCell
								className={
									item.inquiryStatus === '승인'
										? 'font-bold text-green-900'
										: item.inquiryStatus === '승인대기'
											? 'font-bold text-yellow-900'
											: 'font-bold text-red-900'
								}>
								{item.inquiryStatus}
							</TableCell>
							<TableCell>
								<Button
									onPress={onOpen}
									radius='sm'
									style={{width: '95px', height: '35px'}}
									className='border border-gray-900 border-opacity-30 bg-white text-center text-sm font-bold leading-[normal] tracking-normal text-gray-900 hover:border-blue-900 hover:text-blue-900'>
									보기
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								Modal Title
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

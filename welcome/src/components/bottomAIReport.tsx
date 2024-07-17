'use client';
import React from 'react';
import {useBottomStore} from '@/store/bottomStore';
import {aiReportList} from '@/data/bottom';
import {useState, useEffect} from 'react';

export default function BottomAIReport(item: any) {
	const {selectedInquiryType, setSelectedInquiryType} = useBottomStore();
	const [currentReport, setCurrentReport] = useState({
		inquiryType: '총',
		total: 410,
		contents: '배송이 늦다',
	});

	useEffect(() => {
		const report = aiReportList.find(
			(item) => item.inquiryType === selectedInquiryType,
		);
		if (report) {
			setCurrentReport(report);
		}
	}, [selectedInquiryType]);

	return (
		<>
			<div>
				<h2 className='relative left-[29px] top-[10px] text-[20px] font-medium text-black'>
					최근 문의 내역
				</h2>
				<div className='relative left-[22px] top-[41px] h-[92px] w-[755px] rounded-lg bg-gray-100'>
					<p className='relative left-[29px] top-[21px] text-base font-normal leading-[25.6px] tracking-normal text-transparent '>
						<span className='font-medium text-[#636566]'>최근 1주일간 </span>
						<span className='font-bold text-[#fd5454] '>
							{currentReport.inquiryType} 요청이 {currentReport.total}건
						</span>
						<span className='font-medium text-[#636566]'>
							이었습니다. <br />
							부정적인 의견 중에서는
						</span>
						<span className='font-bold text-[#fd5454] '>
							{currentReport.contents}
						</span>
						<span className='font-medium text-gray-900'>
							는 의견이 가장 많습니다.
						</span>
					</p>
				</div>
			</div>
		</>
	);
}

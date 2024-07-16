'use client';
import React, {useState} from 'react';
import {Icon} from './Icon';
import {FaAngleDown} from 'react-icons/fa6';
import {VscCircleFilled} from 'react-icons/vsc';
import type {IsideData} from '@/types/data';

interface IsideMenu {
	data: IsideData;
	onClick: () => void;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
	isHovered: boolean;
	isSelected: boolean;
}

const SideMenu = ({
	data,
	onClick,
	onMouseEnter,
	onMouseLeave,
	isHovered,
	isSelected,
}: IsideMenu) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleMenuClick = () => {
		setOpen(!open);
		onClick();
	};

	return (
		<div>
			<div
				onClick={handleMenuClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				className={`relative flex h-[54px] w-[214px] cursor-pointer items-center justify-between rounded-[8px] `}>
				{/* 좌측 꾸밈 바 */}
				<div
					className={`mr-[16px] h-[44px] w-[6px] rounded-r-[8px] ${isHovered ? 'bg-blue-900' : ''} `}></div>
				<div
					className={`h-[44px] grow rounded-[8px] ${isSelected ? 'bg-blue-900' : ''} px-[10px]`}>
					<div
						className={`-mt-px flex size-full items-center gap-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
						<Icon icon={data.icon} />
						<div
							className={`font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
							{data.title}
						</div>
					</div>
				</div>

				{data.sub && (
					<div
						className={`absolute right-0 z-10 transition-transform duration-[600ms] ease-in-out ${open ? 'rotate-180' : ''}`}>
						<FaAngleDown
							style={{
								fontSize: '14px',
								color: isSelected ? '#fff' : '#636566',
								marginLeft: '16px',
								marginRight: '16px',
							}}
						/>
					</div>
				)}
			</div>
			{/* 서브메뉴 */}
			{data.sub && (
				<div
					className={`${open ? 'max-h-[200px]' : 'max-h-0'} overflow-hidden text-center text-sm transition-all duration-[600ms] ease-in-out`}>
					{data.sub.map((sub: string, i: number) => (
						<div
							key={i}
							className={`ml-[34px] flex cursor-pointer items-center gap-3 p-[4px] font-medium hover:text-blue-900`}>
							<div>
								<VscCircleFilled
									style={{
										fontSize: '8px',
									}}
								/>
							</div>
							<div className='text-[14px]'>{sub}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SideMenu;

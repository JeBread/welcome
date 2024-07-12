import React from 'react';
import {Icon} from './Icon';
import {FaAngleDown} from 'react-icons/fa6';

const SideMenu = ({
	data,
	onClick,
	onMouseEnter,
	onMouseLeave,
	isHovered,
	isSelected,
}: any) => {
	return (
		<div
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={`mb-[10px] flex h-[44px] cursor-pointer items-center justify-between rounded-[8px] `}>
			{/* 좌측 바 */}
			<div
				className={`mr-[16px] h-[44px] w-[6px] rounded-r-[8px] ${isSelected ? 'bg-blue-900' : isHovered ? 'bg-blue-900' : ''} `}></div>
			<div
				className={`h-full grow rounded-[8px] ${isSelected ? 'bg-blue-900' : ''} px-[10px]`}>
				<div
					className={`-mt-px flex size-full items-center gap-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
					<Icon icon={data.icon} />
					<div
						className={`font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
						{data.title}
					</div>
				</div>
			</div>
			<FaAngleDown
				style={{
					fontSize: '12px',
					color: '#636566',
					marginLeft: '16px',
					marginRight: '16px',
				}}
			/>
		</div>
	);
};

export default SideMenu;

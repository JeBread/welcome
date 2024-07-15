'use client';
import React from 'react';
import Image from 'next/image';
import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	cn,
} from '@nextui-org/react';
import {FiLogOut} from 'react-icons/fi';
import {FaUser} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa6';

const Header = () => {
	const iconClasses =
		'text-xl text-default-500 pointer-events-none flex-shrink-0';

	return (
		<header
			className='sticky top-0 z-[1000] flex h-[60px] min-w-[1500px] items-center justify-between border-b
    border-solid bg-white px-[20px] py-[14px]'>
			<div className='logo flex gap-[10px]'>
				<Image
					alt='Megastudy logo'
					width={150}
					height={30}
					src='/mega_logo.jpg'
				/>
				{/* <p className="user-name self-center ml-[8px]">관리자 님</p> */}
			</div>
			<div className='header-btn-group flex gap-4'>
				<Dropdown>
					<DropdownTrigger>
						<Button
							className='text-black'
							color='default'
							style={{width: '110px', height: '40px'}}>
							고등부04 님
						</Button>
					</DropdownTrigger>
					{/* onClick={() => router.push('/setting')} */}
					<DropdownMenu variant='faded' aria-label='Dropdown menu with icons'>
						<DropdownItem
							key='new'
							startContent={<FaUsers className={iconClasses} />}>
							사용자 관리
						</DropdownItem>
						<DropdownItem
							key='copy'
							startContent={<FaUser className={iconClasses} />}>
							개인정보 설정
						</DropdownItem>
						<DropdownItem
							key='edit'
							startContent={<FiLogOut className={iconClasses} />}>
							로그아웃
						</DropdownItem>
						{/* <DropdownItem
								key='delete'
								className='text-danger'
								color='danger'
								startContent={
									<DeleteDocumentIcon
										className={cn(iconClasses, 'text-danger')}
									/>
								}>
								Delete file
							</DropdownItem> */}
					</DropdownMenu>
				</Dropdown>
			</div>
		</header>
	);
};

export default Header;

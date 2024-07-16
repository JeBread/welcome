'use client';
import React from 'react';
import Image from 'next/image';
import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';
import {FiLogOut} from 'react-icons/fi';
import {FaUser} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa6';
import Link from 'next/link';

const Header = () => {
	const iconClasses =
		'text-xl text-default-500 pointer-events-none flex-shrink-0';

	return (
		<header
			className='fixed top-0 z-[1000] flex h-[60px] w-full items-center justify-between overflow-hidden
    border-b border-solid bg-white px-[20px] py-[14px]'>
			<Link href='/'>
				<div className='flex cursor-pointer gap-[10px]'>
					<Image
						alt='Megastudy logo'
						width={150}
						height={30}
						src='/mega_logo.jpg'
					/>
				</div>
			</Link>
			{/* <p className="user-name self-center ml-[8px]">관리자 님</p> */}
			<div className='header-btn-group flex gap-4'>
				<Dropdown>
					<DropdownTrigger>
						<Button
							className='bg-white text-black'
							color='default'
							startContent={<FaUser className={iconClasses} />}
							style={{width: '110px', height: '40px'}}>
							고등부04 님
						</Button>
					</DropdownTrigger>
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

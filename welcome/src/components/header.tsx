import React from 'react';
import Image from 'next/image';
import {Button} from '@nextui-org/react';

const Header = () => {
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
				<Button
					className='text-black'
					color='default'
					style={{width: '110px', height: '40px'}}>
					고등부04 님
				</Button>
				{/* onClick={() => router.push('/setting')} */}
			</div>
		</header>
	);
};

export default Header;

'use client';

import React, {useState} from 'react';
import {sideData} from '@/data/side';
import SideMenu from './SideMenu';

const Side = () => {
	const [navIndex, setNavIndex] = useState<number>(0);
	const [hoverNavIndex, setHoverNavIndex] = useState<number>(navIndex);

	return (
		<aside className='fixed top-[60px] h-screen min-w-[230px] bg-white pt-3'>
			{sideData.map((side, index) => (
				<React.Fragment key={index}>
					<SideMenu
						data={side}
						onClick={() => setNavIndex(index)}
						onMouseEnter={() => setHoverNavIndex(index)}
						onMouseLeave={() => setHoverNavIndex(navIndex)}
						isHovered={hoverNavIndex === index}
						isSelected={navIndex === index}
					/>
				</React.Fragment>
			))}
		</aside>
	);
};

export default Side;

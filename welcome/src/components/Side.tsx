import {sideData} from '@/data/side';
import React from 'react';
import SideMenu from './SideMenu';

const Side = () => {
	return (
		<aside className={`min-w-[230px]`}>
			{sideData.map((side, index) => (
				<React.Fragment key={index}></React.Fragment>
			))}
		</aside>
	);
};

export default Side;

import React from 'react';

const Title = ({title}: {title: string}) => {
	return <h3 className='text-[20px] font-medium text-gray-900'>{title}</h3>;
};

export default Title;

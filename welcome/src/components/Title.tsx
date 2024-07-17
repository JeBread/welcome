import React from 'react';

const Title = ({title}: {title: string}) => {
	return <h3 className='text-[20px] font-medium text-black'>{title}</h3>;
};

export default Title;

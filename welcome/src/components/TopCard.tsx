import React from 'react';

const TopCard = ({
	children,
	item,
	state,
}: {
	children: React.ReactNode;
	item: number;
	state: string;
}) => {
	
	return <div className={`w-full min-w-[372px] ${}`}>{children}</div>;
};

// Try 컴포넌트의 서브 컴포넌트
TopCard.title = ({children}: {children: React.ReactNode}) => {
	return <div>여기에 타이틀이 들어갑니다.</div>;
};
TopCard.titleIcon = ({children}: {children: React.ReactNode}) => {
	return <div>아이콘</div>;
};
TopCard.content = ({children}: {children: React.ReactNode}) => {
	return <div>콘텐트</div>;
};
TopCard.description = ({children}: {children: React.ReactNode}) => {
	return <div>이자리는 설명입니다.</div>;
};
TopCard.descriptionIcon = ({children}: {children: React.ReactNode}) => {
	return <div>설명아이콘</div>;
};

export default TopCard;

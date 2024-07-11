import React from 'react';
import TopCard from './TopCard';

const Top = ({item}: {item: number}) => {
	return (
		<TopCard item={item} state={'bad'}>
			<TopCard.title>Top {item}</TopCard.title>
			<TopCard.titleIcon>Top {item}</TopCard.titleIcon>
			<TopCard.content>Top {item}</TopCard.content>
			<TopCard.descriptionIcon>Top {item}</TopCard.descriptionIcon>
			<TopCard.description>Top {item}</TopCard.description>
		</TopCard>
	);
};

export default Top;

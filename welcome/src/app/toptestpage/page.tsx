import Top from '@/components/Top';
import React from 'react';

export default function TopTestPage() {
	let arr = [1, 2, 3, 4];
	return (
		<div className='flex justify-between'>
			{arr.map((item) => {
				return (
					<React.Fragment key={item}>
						<Top item={item} />
					</React.Fragment>
				);
			})}
		</div>
	);
}

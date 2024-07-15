import MidDoughnut from '@/components/MidDoughnut';
import MidLine from '@/components/MidLine';

export default function MidTest() {
	return (
		<div className='flex size-full justify-between rounded-[16px] bg-blue-900 p-[22px] shadow-box'>
			<MidLine />
			<MidDoughnut />
		</div>
	);
}

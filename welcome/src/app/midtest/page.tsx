import MidDoughnut from '@/components/MidDoughnut';
import MidLine from '@/components/MidLine';

export default function MidTest() {
	return (
		<div className='h-[401px] w-[1037px] rounded-[16px] bg-white p-[22px] shadow-box'>
			<MidLine />
			<MidDoughnut />
		</div>
	);
}

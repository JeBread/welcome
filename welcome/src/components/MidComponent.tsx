import MidDoughnut from '@/components/MidDoughnut';
import MidLine from '@/components/MidLine';

const MidComponent = () => {
	return (
		<div className='mt-[60px] flex w-full justify-between gap-[41px] rounded-[16px] '>
			<MidLine />
			<MidDoughnut />
		</div>
	);
};

export default MidComponent;

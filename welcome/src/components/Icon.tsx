import {FaRegCheckCircle} from 'react-icons/fa';
import {
	FaRegHourglassHalf,
	FaRegFaceSmile,
	FaRegFaceAngry,
	FaRegFaceLaughWink,
} from 'react-icons/fa6';
import {TbCircleMinus} from 'react-icons/tb';
import {BiLoaderCircle} from 'react-icons/bi';
import {IoIosCall} from 'react-icons/io';
import {PiClockClockwiseBold} from 'react-icons/pi';
import {RxDashboard} from 'react-icons/rx';

const iconMap: {[key: string]: JSX.Element} = {
	success: <FaRegCheckCircle className='text-[42px]' />,
	pending: <FaRegHourglassHalf className='text-[38px]' />,
	reject: <TbCircleMinus className='text-[50px]' />,
	call: <IoIosCall className='text-[50px]' />,
	smile: <FaRegFaceSmile />,
	angry: <FaRegFaceAngry />,
	bigsmile: <FaRegFaceLaughWink />,
	wait: <BiLoaderCircle />,
	home: <RxDashboard />,
	log: <PiClockClockwiseBold />,
};

export function Icon({icon}: {icon: string}): JSX.Element {
	return iconMap[icon];
}

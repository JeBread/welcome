import {FaRegCheckCircle} from 'react-icons/fa';
import {
	FaRegHourglassHalf,
	FaRegFaceSmile,
	FaRegFaceAngry,
	FaRegFaceLaughWink,
} from 'react-icons/fa6';
import {TbCircleMinus, TbLayoutDashboard, TbAlertCircle} from 'react-icons/tb';
import {BiLoaderCircle} from 'react-icons/bi';
import {IoIosCall} from 'react-icons/io';
import {
	PiClockClockwiseBold,
	PiPhoneCallBold,
	PiPackageBold,
} from 'react-icons/pi';
import {RiRefund2Line} from 'react-icons/ri';
import {LuMoreHorizontal} from 'react-icons/lu';

const iconMap: {[key: string]: JSX.Element} = {
	success: <FaRegCheckCircle className='text-[42px]' />,
	pending: <FaRegHourglassHalf className='text-[38px]' />,
	reject: <TbCircleMinus className='text-[50px]' />,
	call: <IoIosCall className='text-[50px]' />,
	smile: <FaRegFaceSmile />,
	angry: <FaRegFaceAngry />,
	bigsmile: <FaRegFaceLaughWink />,
	wait: <LuMoreHorizontal />,
	home: <TbLayoutDashboard className='text-[18px]' />,
	log: <PiClockClockwiseBold className='text-[18px]' />,
	center: <PiPhoneCallBold className='text-[18px]' />,
	package: <PiPackageBold className='text-[24px]' />,
	refund: <RiRefund2Line className='text-[24px]' />,
	alert: <TbAlertCircle className='text-[24px]' />,
};

export function Icon({icon}: {icon: string}): JSX.Element {
	return iconMap[icon];
}

import {IcolorObject} from '@/types/color';

export function selectColor(state: string): IcolorObject {
	if (state === 'good') {
		return {
			bgThick: 'bg-green-900',
			bgSoft: 'bg-green-100',
			textThick: 'text-green-900',
			textSoft: 'text-green-100',
		};
	} else if (state === 'bad') {
		return {
			bgThick: 'bg-red-900',
			bgSoft: 'bg-red-100',
			textThick: 'text-red-900',
			textSoft: 'text-red-100',
		};
	} else {
		return {
			bgThick: 'bg-yellow-900',
			bgSoft: 'bg-yellow-100',
			textThick: 'text-yellow-900',
			textSoft: 'text-yellow-100',
		};
	}
}

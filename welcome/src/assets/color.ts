type TthickColor = 'green-900' |'red' | 'yellow';
type TsoftColor = 'green-100' | 'red-100' | 'yellow-100';

interface IcolorObject{
  thick: TthickColor;
  soft:TsoftColor;
}

export function selectColor(state: string): IcolorObject {
	if (state === 'good') {
		return {thick:'green', soft:}
	} else if (state === 'bad') {
		return 'red';
	} else {
		return 'yellow';
	}
}

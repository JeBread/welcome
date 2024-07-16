export interface ItopData {
	title: string;
	state: string;
	case: number;
	default?: number;
	suffix?: string;
	icon: string;
	emphasize: string;
	description: string[];
	descriptionIcon: string;
	hovertitle: string;
	hovercontent: string;
}

export interface IsideData {
	icon: string;
	title: string;
	sub?: string[];
}

export interface IsideData {
	icon: string;
	title: string;
	sub?: string[];
}

export type TdataType =
	| {
			[key: string]: number[];
	  }
	| {[key: number]: number[]};

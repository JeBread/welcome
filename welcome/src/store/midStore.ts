import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface MidState {
	selectIndex: number;
	setselectIndex: (selectIndex: number) => void;
	selectCategory: number;
	setselectCategory: (selectCategory: number) => void;
	selectData: number[];
	setSelectData: (selectData: number[]) => void;
	specificData: string;
	setSpecificData: (specificData: string) => void;
}

export const useMidStore = create<MidState>()(
	persist(
		(set) => ({
			selectIndex: 0,
			setselectIndex: (selectIndex: number) => set({selectIndex}),
			selectCategory: 0,
			setselectCategory: (selectCategory: number) => set({selectCategory}),
			selectData: [0, 0, 0, 0],
			setSelectData: (selectData: number[]) => set({selectData}),
			specificData: '',
			setSpecificData: (specificData: string) => set({specificData}),
		}),
		{
			name: 'mid-storage',
		},
	),
);

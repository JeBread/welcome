import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface BottomState {
	inquiryStatus: string | null;
	setInquiryStatus: (inquiryStatus: string) => void;
	selectedInquiry: string | null;
	setSelectedInquiry: (selectedNqryStatus: string) => void;
	storeLatitude: number | null;
	setStoreLatitude: (latitude: number) => void;
}

export const useBottomStore = create<BottomState>()(
	persist(
		(set) => ({
			inquiryStatus: '승인',
			setInquiryStatus: (inquiryStatus: string) => set({inquiryStatus}),
			selectedInquiry: '환불',
			setSelectedInquiry: (selectedInquiry: string) => set({selectedInquiry}),
			storeLatitude: null,
			setStoreLatitude: (storeLatitude: number) => set({storeLatitude}),
		}),
		{
			name: 'bottom-storage',
		},
	),
);

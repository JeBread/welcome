import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface BottomState {
	inquiryStatus: string | null;
	setInquiryStatus: (inquiryStatus: string) => void;
	selectedInquiryType: string | null;
	setSelectedInquiryType: (selectedInquiryType: string) => void;
	selectedInquiryTotal: number | null;
	setselectedInquiryTotal: (selectedInquiryTotal: number) => void;
}

export const useBottomStore = create<BottomState>()(
	persist(
		(set) => ({
			inquiryStatus: null,
			setInquiryStatus: (inquiryStatus: string) => set({inquiryStatus}),
			selectedInquiryType: '환불',
			setSelectedInquiryType: (selectedInquiryType: string) =>
				set({selectedInquiryType}),
			selectedInquiryTotal: null,
			setselectedInquiryTotal: (selectedInquiryTotal: number) =>
				set({selectedInquiryTotal}),
		}),
		{
			name: 'bottom-storage',
		},
	),
);

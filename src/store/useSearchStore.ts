// This store will control the state of the Modal for the search bar.
import { create } from "zustand";

interface SearchStore {
    isOpen: boolean;
    filter: string;
    currentSearch: string;
    openModal: () => void;
    closeModal: () => void;
    setFilter: (filter: string) => void;
    setCurrentSearch: (search: string) => void;
    resetSearch: () => void; // Resets filter and currentSearch
}

export const useSearchStore = create<SearchStore>((set) => ({
    isOpen: false,
    filter: "",
    currentSearch: "",
    openModal: () => set({ isOpen: true, filter: "", currentSearch: "" }), // Reset search when modal is opened
    closeModal: () => set({ isOpen: false }),
    setFilter: (filter) => set({filter}),
    setCurrentSearch: (search) => set ({ currentSearch: search }),
    resetSearch: () => set({filter: "", currentSearch: ""}) // Explicit reset method
}));
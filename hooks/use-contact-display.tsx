import { create } from "zustand";

interface ContactDisplayStore {
  open: boolean;
  setOpen: (bool: boolean) => void;
}

const useContactDisplay = create<ContactDisplayStore>((set) => ({
  open: false,
  setOpen: (bool) => set((state) => ({ open: bool })),
}));

export default useContactDisplay;

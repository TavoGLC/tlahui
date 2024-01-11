import { create } from "zustand"

interface DisplayStore {
    display: "model" | "how" | 'why';
    onModel: () => void;
    onHow: () => void;
    onWhy: () => void;
};

export const toDisplay = create<DisplayStore>((set) => ({
    display: "model",
    onModel: () => set(() => ({display:"model"})),
    onHow: () => set(() => ({display:"how"})),
    onWhy: () => set(() => ({display:"why"})),

}));

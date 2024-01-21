import { ButtonsColumn } from "./buttonsColumn";

export const Sidebar = () => {
    return (
        <aside className="fixed left-0 flex felx-col items-center justify-center w-20 h-full bg-[#eeeeee] border-r">
            <ButtonsColumn />
        </aside>
    );
};
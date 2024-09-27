import cls from './SidebarSwitcher.module.scss';
import { toggleSidebar } from '@features/events';
import Tab from '@assets/icons/tab.svg';
import { useAppDispatch } from '@shared/lib';

export const SidebarSwitcher = () => {
    const dispatch = useAppDispatch();
    return (
        <div
            onClick={() => {
                dispatch(toggleSidebar());
            }}
            className={cls.tab}>
            <Tab />
        </div>
    );
};


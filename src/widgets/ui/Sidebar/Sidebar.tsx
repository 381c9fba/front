import cls from './Sidebar.module.scss';
import { SidebarSwitcher, ThemeSwitcher } from '@shared/ui';
import { NavigationList } from '@features/navigation';
import { classNames } from '@shared/lib';

export interface ISidebarProps {
    isOpen: boolean;
}

export const Sidebar = (
    {
        isOpen,
    }: ISidebarProps,
) => {
    return (
        <div className={classNames(cls.wrapper, {
            [cls.hide]: !isOpen,
        }, [])}>
            <NavigationList />
            <div className={classNames(cls.buttons, {
                [cls.hide]: !isOpen,
            }, [])}>
                <ThemeSwitcher />
                <SidebarSwitcher />
            </div>
        </div>
    );
};


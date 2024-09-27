import cls from './Wrapper.module.scss';
import { Navbar } from '@widgets/ui';
import { Outlet } from 'react-router-dom';

export const Wrapper = () => {
    return (
        <div className={cls.wrapper}>
            <Navbar />
            <Outlet />
        </div>
    );
};


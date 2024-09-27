import cls from './Navbar.module.scss';
import Logo from '@assets/icons/logo.svg';

export const Navbar = () => {
    return (
        <div className={cls.wrapper}>
            <Logo />
        </div>
    );
};


import cls from './NavigationItem.module.scss';
import { INavigation } from '@features/navigation';
import { Text } from '@shared/ui';

import { ColorEnum, SizeEnum } from '@shared/lib';

export const NavigationItem = (
    {
        path,
        label,
    }: INavigation) => {
    return (
        <li className={cls.wrapper}>
            <Text.Link
                className={cls.link}
                size={SizeEnum.H3}
                color={ColorEnum.TEXT}
                to={path}
            >
                {label}
            </Text.Link>
        </li>
    );
};


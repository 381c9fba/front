import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { BorderEnum, ColorEnum, SizeEnum } from '@shared/lib';


export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
    color?: ColorEnum;
    size?: SizeEnum;
    border?: BorderEnum;
}
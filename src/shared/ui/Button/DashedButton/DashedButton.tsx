import cls from './DashedButton.module.scss';
import { BorderEnum, classNames, ColorEnum, SizeEnum } from '@shared/lib';
import Loading from '@assets/icons/loadingSpinner.svg';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IDashedButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
    color?: ColorEnum;
    size?: SizeEnum;
    borderSize: SizeEnum;
    border?: BorderEnum;
}

export const DashedButton = (
    {
        size = SizeEnum.H3,
        border = BorderEnum.H5,
        color = ColorEnum.PRIMARY,
        borderSize = SizeEnum.H6,
        className,
        isLoading,
        children,
        ...props
    }: IDashedButtonProps,
) => {
    return (
        <button
            disabled={isLoading}
            {...props}
            className={classNames(cls.button, {
                // BG
                [cls.primary]: color === ColorEnum.PRIMARY,
                [cls.secondary]: color === ColorEnum.SECONDARY,
                [cls.success]: color === ColorEnum.SUCCESS,
                [cls.warning]: color === ColorEnum.WARNING,
                [cls.danger]: color === ColorEnum.DANGER,
                [cls.info]: color === ColorEnum.INFO,
                [cls.link]: color === ColorEnum.LINK,
                [cls.white]: color === ColorEnum.WHITE,
                [cls.black]: color === ColorEnum.BLACK,
                [cls.bg]: color === ColorEnum.BG,
                [cls.bgDark]: color === ColorEnum.BGDARK,


                // РАЗМЕР
                [cls.h1]: size === SizeEnum.H1,
                [cls.h2]: size === SizeEnum.H2,
                [cls.h3]: size === SizeEnum.H3,
                [cls.h4]: size === SizeEnum.H4,
                [cls.h5]: size === SizeEnum.H5,
                [cls.h6]: size === SizeEnum.H6,

                [cls.border_h1]: borderSize === SizeEnum.H1,
                [cls.border_h2]: borderSize === SizeEnum.H2,
                [cls.border_h3]: borderSize === SizeEnum.H3,
                [cls.border_h4]: borderSize === SizeEnum.H4,
                [cls.border_h5]: borderSize === SizeEnum.H5,
                [cls.border_h6]: borderSize === SizeEnum.H6,

                // BORDER
                [cls.borderH1]: border === BorderEnum.H1,
                [cls.borderH2]: border === BorderEnum.H2,
                [cls.borderH3]: border === BorderEnum.H3,
                [cls.borderH4]: border === BorderEnum.H4,
                [cls.borderH5]: border === BorderEnum.H5,
                [cls.borderH6]: border === BorderEnum.H6,

            }, [className])}
        >
            {isLoading
                ?
                <Loading />
                :
                <>
                    {children}
                </>
            }
        </button>
    );
};


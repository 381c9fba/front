import cls from './MainPage.module.scss';
import { VideoForm } from '@entities/video';

export const MainPage = () => {
    return (
        <div className={cls.wrapper}>
            <h1 className={cls.title}>
                Генерация тегов (ключевых слов) для видео
            </h1>
            <p className={cls.text}>Загрузка видео</p>
            <VideoForm />
        </div>
    );
};


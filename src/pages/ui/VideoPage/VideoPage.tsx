import cls from './VideoPage.module.scss';
import { VideoResult } from '@entities/video';

export const VideoPage = () => {
    return (
        <div className={cls.wrapper}>
            <h1 className={cls.title}>
                Генерация тегов (ключевых слов) для видео
            </h1>
            <p className={cls.text}>Генерация тегов</p>
            <VideoResult />
        </div>
    );
};


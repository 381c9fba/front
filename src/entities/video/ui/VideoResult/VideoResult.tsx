import cls from './VideoResult.module.scss';
import { useParams } from 'react-router-dom';
import { useLazyGetStatusQuery, useLazyGetTagsQuery } from '@entities/video';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Стили для скелетонов

export const VideoResult = () => {
    const { id } = useParams<{ id: string }>(); // Получаем параметр id из URL
    const [trigger, { data }] = useLazyGetStatusQuery();
    const [tagsTrigger, { data: tagsData, isSuccess }] = useLazyGetTagsQuery();

    useEffect(() => {
        if (id) {
            trigger({ id });
            if (data && data.status !== 'done') {
                setInterval(() => {
                    trigger({ id });
                }, 3000);
            }
        }
    }, [id, trigger]);

    useEffect(() => {
        if (id && data && data.status === 'done') {
            tagsTrigger({ id });
        }
    }, [data]);

    return (
        <div className={cls.wrapper}>
            <div className={cls.status}>
                <p className={cls.text}>Статус видео</p>
                <p className={cls.text}>{data?.status}</p>
            </div>
            <div className={cls.tags}>
                <p className={cls.text}>Теги для видео</p>
                <div className={cls.skeleton}>
                    {
                        isSuccess
                            ?
                            <ul className={cls.list}>
                                {isSuccess && tagsData && tagsData.tags.map(tag => (
                                    <li
                                        key={tag}
                                        className={cls.listItem}>
                                        <p>{tag}</p>
                                    </li>
                                ))}
                            </ul>
                            : [...Array(5)].map((_, index) => (
                                <Skeleton key={index} height={20} width={80} style={{ marginBottom: '8px' }} />
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

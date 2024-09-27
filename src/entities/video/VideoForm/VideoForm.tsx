import cls from './VideoForm.module.scss';
import { useRef, useState } from 'react';

export const VideoForm = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className={cls.wrapper}>
            {
                file
                    ?
                    <div className={cls.video}>
                        <video src={URL.createObjectURL(file)}></video>
                        <p className={cls.text}>{file.name}</p>
                        <button
                            className={cls.submitButton}
                            type="button"
                        >Отправить
                        </button>
                    </div>
                    :
                    <form className={cls.form}>
                        <div className={cls.fileWrapper}>
                            <input
                                onChange={(e) => {
                                    if (e.target.files) {
                                        setFile(e.target.files[0]);
                                    }
                                }}
                                ref={fileInputRef} type="file" accept="video/*" />
                            <div className={cls.info}>
                                <button
                                    type="button"
                                    onClick={handleClick}
                                >
                                    Выбрать видео
                                </button>
                            </div>
                            <input
                                className={cls.urlInput}
                                placeholder="URL"
                                type="text" />
                        </div>
                    </form>
            }
        </div>
    );
};

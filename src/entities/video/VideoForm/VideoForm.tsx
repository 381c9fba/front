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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    // Drag and drop handlers
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add(cls.dragOver);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove(cls.dragOver);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove(cls.dragOver);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    return (
        <div className={cls.wrapper}>
            {file ? (
                <div className={cls.video}>
                    <video src={URL.createObjectURL(file)} controls></video>
                    <p className={cls.text}>{file.name}</p>
                    <button className={cls.submitButton} type="button">
                        Отправить
                    </button>
                </div>
            ) : (
                <form className={cls.form}>
                    <div className={cls.fileWrapper}>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="video/*"
                            onChange={handleFileChange}
                        />
                        <div
                            className={cls.info}
                            onClick={handleClick}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <button type="button">Выбрать видео</button>
                            <p className={cls.text}>
                                Выберите файлы
                                или перетащите их сюда
                            </p>
                        </div>
                        <input
                            className={cls.urlInput}
                            placeholder="URL"
                            type="text"
                        />
                    </div>
                </form>
            )}
        </div>
    );
};

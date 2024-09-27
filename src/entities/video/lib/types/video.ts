export interface VideoResponse {
    id: string | number;
}

export interface UploadVideoRequest {
    video: File;
}

export interface UploadUrlRequest {
    url: string;
}

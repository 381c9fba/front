import { mainApi } from '@shared/lib/store/api/mainApi.ts';
import { UploadUrlRequest, UploadVideoRequest, VideoResponse } from '@entities/video';

export const videoApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        postVideo: builder.mutation<VideoResponse, UploadVideoRequest>({
            query: ({ video }) => {
                const formData = new FormData();
                formData.append('video', video); // Append the file with the key 'video'

                return {
                    method: 'POST',
                    url: `/video/formData`,
                    body: formData,
                };
            },
        }),
        postUrl: builder.mutation<VideoResponse, UploadUrlRequest>({
            query: ({ url }) => ({
                method: 'POST',
                url: `/video/url`,
                body: JSON.stringify({ url }), // Send the URL as a JSON object
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        getStatus: builder.query<{ status: string }, { id: string }>({
            query: ({ id }) => ({
                method: 'GET',
                url: `/video/${id}`,
            }),
        }),
        getTags: builder.query<{ tags: string[] }, { id: string }>({
            query: ({ id }) => ({
                method: 'GET',
                url: `/video/tags/${id}`,
            }),
        }),
    }),
});

export const {
    usePostVideoMutation,
    usePostUrlMutation,
    useLazyGetStatusQuery,
    useLazyGetTagsQuery,
} = videoApi;

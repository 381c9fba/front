import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/ui';

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <MainPage />,
            },
        ],
    },
]);

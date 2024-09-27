import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/ui';
import { Wrapper } from '@widgets/ui';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Wrapper />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
        ],
    },
]);

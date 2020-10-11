const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout'),
        children: [
            {
                path: '',
                name: 'PageIndex',
                component: () => import('pages/Index'),
            },
            {
                path: '/sandbox',
                name: 'Sandbox',
                component: () => import('pages/Sandbox'),
            },
        ],
    },

    {
        path: '/cart',
        component: () => import('layouts/WithNavLayout'),
        children: [
            {
                path: '',
                name: 'PageCart',
                component: () => import('pages/Cart'),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue'),
    },
];

export default routes;

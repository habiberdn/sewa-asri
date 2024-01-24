import Cookies from 'universal-cookie';

const cookies = new Cookies("auth-token", { path: '/' });

interface SearchParamsVerification {
    email?: string | null;
    otp?: number | null;
}

import { Route, RootRoute, Router, redirect, NotFoundRoute } from "@tanstack/react-router";
import { 
    Login, 
    Dashboard, 
    Home, 
    Register, 
    VerificationRegister, 
    CreatePassword, 
    ForgotPassword, 
    ForgotPasswordVerfication,
    CreateNewPassword,
    Chat,
    ReservationSchedule,
    VillaManagement,
    CreateVilla,
    VillaDetailDescription,
    EditVilla,
    PageNotFound,
    AboutUs
} from ".";

const rootRoute = new RootRoute();

async function checkAuth({ location }) {
    const token: string = cookies.get("auth-token");
    console.info("token: ", token);

    if (!token) {
        throw redirect({
            to: '/login',
            search: {
                redirect: location.href,
            }
        });
    }
}

const notFoundRoute = new NotFoundRoute({
    getParentRoute: () => rootRoute,
    component: PageNotFound
});

const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
});

const aboutUsRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/about-us',
    component: AboutUs
});

const loginRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: Login,
    beforeLoad: async () => {
        const token: string = cookies.get("auth-token");

        if (token) {
            throw redirect({
                to: '/dashboard',
                search: {
                    redirect: location.href,
                }
            });
        }
    }
});

const registerRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/register',
    component: Register
});

const verificationRegisterRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/verification-register',
    component: VerificationRegister,
    beforeLoad: async ({ search }: { search: SearchParamsVerification }) => {
        if (!search.email) {
            throw redirect({
                to: '/register',
                search: {
                    redirect: location.href,
                }
            });
        }
    }
});

const createPasswordRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/create-password',
    component: CreatePassword,
    beforeLoad: async ({ search }: { search: SearchParamsVerification }) => {
        if (!search.email && !search.otp) {
            throw redirect({
                to: '/register',
                search: {
                    redirect: location.href,
                }
            });
        }
    }
});

// const createAccountVerification = new Route({
//     getParentRoute: () => createPasswordRoute,
//     path: '/verification',
//     beforeLoad:async ({ search }) => {
//         console.info("Route CreatePassword: ", search);
//     }
// });

// const createAccountStatusRoute = new Route({
//     getParentRoute: () => rootRoute,
//     path: '/create-account-status',
//     component: Dashboard
// });

const forgotPasswordRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/forgot-password',
    component: ForgotPassword
});

const forgotPasswordVerificationRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/forgot-password-verification',
    component: ForgotPasswordVerfication
});

const createNewPasswordRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/create-new-password',
    component: CreateNewPassword
});

// const resetPasswordStatusRoute = new Route({
//     getParentRoute: () => rootRoute,
//     path: '/create-new-password-status',
//     component: Dashboard
// });

const dashboardRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: Dashboard,
    beforeLoad: ({ location }) => checkAuth({ location })
});

const chatRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/chat',
    component: Chat,
    beforeLoad: ({ location }) => checkAuth({ location })
});

const reservationScheduleRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/reservation-schedule',
    component: ReservationSchedule,
    beforeLoad: ({ location }) => checkAuth({ location })
});

const villaManagementRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/villa-management',
    component: VillaManagement,
    beforeLoad: ({ location }) => checkAuth({ location })
});

const createVillaRoute = new Route({
    getParentRoute: () => rootRoute,
    path: 'villa-management/create-new-villa',
    component: CreateVilla,
    beforeLoad: ({ location }) => checkAuth({ location })
    
});

const villaDetailDescriptionRoute = new Route({
    getParentRoute: () => rootRoute,
    path: 'villa-management/villa-detail-description/$id',
    component: VillaDetailDescription,
    beforeLoad: ({ location }) => checkAuth({ location })
});

const editvillaRoute = new Route({
    getParentRoute: () => rootRoute,
    path: 'villa-management/edit-villa/$id',
    component: EditVilla,
    beforeLoad: ({ location }) => checkAuth({ location })
});

const routeTree = rootRoute.addChildren([
    homeRoute, 
    aboutUsRoute,
    loginRoute, 
    registerRoute,
    createPasswordRoute,
    // createAccountStatusRoute,
    forgotPasswordRoute,
    forgotPasswordVerificationRoute,
    createNewPasswordRoute,
    // resetPasswordStatusRoute,
    verificationRegisterRoute,

    dashboardRoute,
    chatRoute,
    reservationScheduleRoute,
    villaManagementRoute,
    createVillaRoute,
    villaDetailDescriptionRoute,
    editvillaRoute
]);

const router = new Router({ routeTree, notFoundRoute });

export {
    router
};
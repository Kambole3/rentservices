const Settings={
    rentalOffersCount:312,
}as const;

const AppRoute={
    Main : '/',
    Login : '/login',
    Favorite: '/favorites',
    Offer: '/offer/:id',
} as const;
const AuthorizationStatus={
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unkown: 'UNKOWN'
}

export {Settings, AppRoute, AuthorizationStatus};
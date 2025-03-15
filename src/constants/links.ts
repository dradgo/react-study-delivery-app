enum PageType {
    general = 'general',
    home = 'home',
    login = 'login',
    clientOrders = 'clientOrders',
    courierOrders = 'courierOrders',
    courierProfile = 'courierProfile',
    clientRestaurant = 'clientRestaurant',
    clientProfile = 'clientProfile',
    clientCart = 'clientCart',
    restaurantDishes = 'restaurantDishes',
    restaurantManage = 'restaurantManage',
    dashboard = 'dashboard',
    restaurantOrders = 'restaurantOrders',
    adminOrders = 'adminOrders',
}

export const INTERNAL_ROUTES: Record<PageType, string> = {
    [PageType.general]: '/',
    [PageType.home]: '/home',
    [PageType.login]: '/login',
    [PageType.clientOrders]: '/home/client',
    [PageType.courierOrders]: '/home/courier',
    [PageType.courierProfile]: '/courier/profile',
    [PageType.clientRestaurant]: '/client/restraunt',
    [PageType.clientProfile]: '/client/profile',
    [PageType.clientCart]: '/client/cart',
    [PageType.restaurantDishes]: '/client/restaurant/:restaurantName/dishes',
    [PageType.restaurantManage]: '/restaurant/manage',
    [PageType.restaurantOrders]: '/restaurant/orders',
    [PageType.adminOrders]: '/admin/orders',
    [PageType.dashboard]: '/home/restaurant',
};

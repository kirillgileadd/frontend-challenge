import AllCats from "../pages/AllCats";
import FavoritesCats from "../pages/FavoritesCats";

export interface IRoute {
    path: string;
    element: JSX.Element
}

export enum RouteNames {
    CATS = '/',
    FAVOTITES_CATS = '/favorites',
}

export const routes: IRoute[] = [
    {path: RouteNames.CATS, element: <AllCats/>},
    {path: RouteNames.FAVOTITES_CATS, element: <FavoritesCats/>},
]
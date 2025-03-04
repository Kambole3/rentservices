import { JSX } from "react";
import MainPage from "../../pagees/main-page/main-page";
import Favorite from "../../pagees/favorite/favorite";
import LogIn from "../../pagees/login/login";
import Offer from "../../pagees/offer/offer";
import NotFound from "../../pagees/404-page/404-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {AppRoute,AuthorizationStatus} from "../../const";
import { PrivateRoute } from "../private-route/private-route";
type AppMainPageProps = {
  rentalOffersCount:number;
}
function app({rentalOffersCount}:AppMainPageProps): JSX.Element {
  return(
    <BrowserRouter>
    <Routes>

    <Route
        path={AppRoute.Main}
        element={<MainPage rentalOffersCount={rentalOffersCount}/>}
        />

<Route
        path={AppRoute.Favorite}
        element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorite/></PrivateRoute>
        }
        />
        <Route
        path={AppRoute.Login}
        element={<LogIn/>}
        />
        <Route
        path={AppRoute.Offer}
        element={<Offer/>}
        />
        <Route
        path="*"
        element={<NotFound/>}
        />

    </Routes>
    <Routes></Routes>
        <MainPage rentalOffersCount={rentalOffersCount}/>

        </BrowserRouter>
        
    );
}

export default app;
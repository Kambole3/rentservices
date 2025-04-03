// опишем в нем объект начального состояния: город (используется для отбора списка предложений в определённом городе) и список предложений по аренде. 

import { createReducer } from "@reduxjs/toolkit";
import { OffersList } from "../types/offer";
import { changeCity, offersCityList } from "./action";
import { CITIES_LOCATION } from "../const";
import { offersList } from "../mocks/offer-list";
import { getCity } from "../utils";


const defaultCity = getCity('Амстердам', CITIES_LOCATION);

const initialState = {
    city: defaultCity,
    offers: offersList,
};

const reducer = createReducer(initialState, (builder) => {
    builder
    .addCase(changeCity, (state, action) => {
        state.city = action.payload;
    })
    .addCase(offersCityList, (state, action) => {
        state.offers = action.payload;
    });
});
export {reducer};
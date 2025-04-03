import { SortOffersType } from "./const";
import { CityOffer, OffersList } from "./types/offer";
import { SortOffer } from "./types/sort";

function getCity(selectedCity: string | undefined, cities: CityOffer[]): CityOffer| undefined{
  return cities.find((item) => item.name === selectedCity);
}

function getOffersByCity (city: string | undefined, offers: OffersList[]): OffersList[]{
  return offers.filter((offer) => offer.city.name === city);
}




function sortOffersByType(offers: OffersList[], type: SortOffer): OffersList[] {
    const sortedOffers = [...offers]; // Создаем копию массива перед сортировкой
    switch(type) {
      case SortOffersType.PriceToHeight:
        return sortedOffers.sort((a, b) => a.price - b.price);
      case SortOffersType.PriceToLow:
        return sortedOffers.sort((a, b) => b.price - a.price);
      case SortOffersType.TopRated:
        return sortedOffers.sort((a, b) => b.rating - a.rating);
      default:
        return sortedOffers;
    }
  }

  export { getCity, sortOffersByType, getOffersByCity };

  
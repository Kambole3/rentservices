import React, { JSX, useState } from "react";
import { Link } from "react-router-dom";
import CitiesCard from "../../components/cities-card/cities-card";
import { OffersList } from "../../types/offer";
import Map from "../../components/Map/map";
import { CITY } from "../../mocks/city";
import { POINTS } from "../../mocks/points";
import { Points } from "../../types/map";
import MapList from "../../components/mapList/mapList";
import { useAppSelector } from "../../hooks";
import { SortOffer } from "../../types/sort";
import { getOffersByCity, sortOffersByType } from "../../utils";// Убедитесь, что путь правильный
import { Logo } from "../../components/logo/Logo";
import { CitiesList } from "../../components/citiesList/citiesList";
import { SortOptions } from "../../components/sort-options/sort-options";
import { CitiesCardList } from "../../components/CitiesCardList/cities-card-list";
import { BlockName } from "../../types/blockName";


//Временная функция для фильтрации предложений по городу
// const getOffersByCity = (
//   cityName: String | undefined,
//   offersList: OffersList[]
// ) => {
//   if (!cityName) return [];
//   return offersList.filter((offer) => offer.city.name === cityName);
// };

type MainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
};

function MainPage({
  rentalOffersCount,
  offersList,
}: MainPageProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Points | null>(null);

  const handlePointHover = (listItemName: string) => {
    const currentPoint = POINTS.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint || null);
  };
  //const selectedCity = useAppSelector(getActiveCit);
  const selectedCity = useAppSelector((state) => state.city);
  const offersLists = useAppSelector((state) => state.offers);
  console.log("offerslist:" + offersList[0].city.name)
  
  const selectedCityOffers = getOffersByCity(selectedCity?.name.toString(), offersList);
  console.log(`selectedOffers: ${selectedCityOffers.length} city: ${selectedCity?.name} `)
  //const selectedCityOffers = useMemo(() => getOffersByCity(selectedCity?.name, offersList), [selectedCity, offersList]);
  const city = selectedCityOffers[0]?.city;
  const cityRentalOffersCount = selectedCityOffers.length;

  const [selectedOffer, setSelectedOffer] = useState<OffersList | undefined>(
    undefined
  );

  const handleOfferHover = (offerId: string) => {
    const currentOffer = offersLists.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };

  const [activeSort, setActiveSort] = useState<SortOffer>("Popular");

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Myemail@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link to="/login" className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cityRentalOffersCount} places to stay in {selectedCity?.name}
              </b>
              <SortOptions
                activeSorting={activeSort}
                onChange={(newSorting) => setActiveSort(newSorting)}
              />
              <CitiesCardList block={BlockName.AllPages} offersList={sortOffersByType(selectedCityOffers, activeSort)}
              onListItemHover={handleOfferHover} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map">
                {/* <h2>Парки города {city.name || CITY.title}:</h2> */}
                {/*  */}
                {/* <Map
                  city={CITY}
                  points={POINTS}
                  selectedPoint={selectedPoint}
                /> */}
                <Map block={BlockName.AllPages} city={city} offers={selectedCityOffers} selectedOffer={selectedOffer} />
                {/* <Map
                  city={city}
                  points={selectedCityOffers.map((offer) => ({
                    title: offer.title,
                    lat: offer.location.latitude,
                    lng: offer.location.longitude,
                  }))}
                  selectedPoint={selectedPoint}
                /> */}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
import { JSX, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Logo } from "../../components/logo/Logo";
import { FullOffer, OffersList } from "../../types/offer";
import { useParams } from "react-router-dom";
import NotFound from "../404-page/404-page";
import { SubmitReviewComponent } from "../../components/SubmitReviewComponent/submit-review-component";
import MapList from "../../components/mapList/mapList";
import { POINTS } from "../../mocks/points";
import { CITY } from "../../mocks/city";
import Map from "../../components/Map/map";
import { Points } from "../../types/map";
import { CitiesCardList } from "../../components/CitiesCardList/cities-card-list";
import { BlockName } from "../../types/blockName";
import ReviewsList from "../../components/reviews-list/reviews-list";
import { reviews } from "../../mocks/reviews";

type OfferProps={
  offers: FullOffer[];
  offersList: OffersList[];
}

function OfferPage({offers, offersList}: OfferProps):JSX.Element {
  
  const params = useParams();
  const offer = offers.find((item)=>item.id===params.id);
  const [selectedPoint, setSelectedPoint] = useState<Points | null>(null);

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = POINTS.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint || null);
  };
  const nearbyOffers = offers.slice(5, 8); //filter((item)=>item.city.name==offer?.city.name)
  console.log("Length: " + nearbyOffers.length + offer?.city)
  if(!offer){
    return <NotFound/>
  }
    return (
        <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo/>
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
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((item)=>(
                  <div key={item} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={item}
                    alt="Photo studio"
                  />
                </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium?(<div className="offer__mark">
                  <span>Premium</span>
                </div>):null}
                
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offer.title}
                  </h1>
                  <button
                  className={`offer__bookmark-button button ${
                    offer.isFavorite ? "offer__bookmark-button--active" : ""
                  }`}
                  type="button">
                
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use href="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                  <span
                    style={{ width: `${(offer.rating / 5) * 100}%` }}
                  ></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {offer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                  {offer.goods.map((item, index) => (
                    <li key={index} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${
                      offer.host.isPro ? "offer__avatar-wrapper--pro" : ""
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                    <span className="offer__user-name">{offer.host.name}</span>
                    <span className="offer__user-status">
                    {offer.host.isPro ? "Pro" : ""}
                  </span>
                  </div>
                  <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                  </div>
                </div>
                 {/* REVIEWS */}

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{" "}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
              </section>
                {/* <section className="offer__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot; <span className="reviews__amount">1</span>
                  </h2>
                  <ul className="reviews__list">
                    <li className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img
                            className="reviews__avatar user__avatar"
                            src="img/avatar-max.jpg"
                            width="54"
                            height="54"
                            alt="Reviews avatar"
                          />
                        </div>
                        <span className="reviews__user-name">Max</span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{ width: "80%" }}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          A quiet cozy and picturesque that hides behind a a river
                          by the unique lightness of Amsterdam. The building is
                          green and from 18th century.
                        </p>
                        <time className="reviews__time" dateTime="2019-04-24">
                          April 2019
                        </time>
                      </div>
                    </li>
                  </ul>
                  <SubmitReviewComponent/>
                </section> */}
              </div>
            </div>
            <section className="offer__map map">
            <h1>Парки города {offer.city.name}:</h1>
            {/* <MapList points={POINTS} onListItemHover={handleListItemHover} /> */}
            <Map block={BlockName.AllPages} city={offer.city} offers={offers} selectedOffer={offer} />
          </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <CitiesCardList block={BlockName.NearOfferList} offersList={nearbyOffers} />
              {/* <div className="near-places__list places__list">
                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img
                        className="place-card__image"
                        src="img/room.jpg"
                        width="260"
                        height="200"
                        alt="Place image"
                      />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;80</b>
                        <span className="place-card__price-text">
                          &#47;&nbsp;night
                        </span>
                      </div>
                      <button
                        className="place-card__bookmark-button place-card__bookmark-button--active button"
                        type="button"
                      >
                        <svg
                          className="place-card__bookmark-icon"
                          width="18"
                          height="19"
                        >
                          <use href="#icon-bookmark" />
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{ width: "80%" }}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Wood and stone place</a>
                    </h2>
                    <p className="place-card__type">Private room</p>
                  </div>
                </article>
  
                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img
                        className="place-card__image"
                        src="img/apartment-02.jpg"
                        width="260"
                        height="200"
                        alt="Place image"
                      />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;132</b>
                        <span className="place-card__price-text">
                          &#47;&nbsp;night
                        </span>
                      </div>
                      <button
                        className="place-card__bookmark-button button"
                        type="button"
                      >
                        <svg
                          className="place-card__bookmark-icon"
                          width="18"
                          height="19"
                        >
                          <use href="#icon-bookmark" />
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{ width: "80%" }}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Canal View Prinsengracht</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>
  
                <article className="near-places__card place-card">
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img
                        className="place-card__image"
                        src="img/apartment-03.jpg"
                        width="260"
                        height="200"
                        alt="Place image"
                      />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;180</b>
                        <span className="place-card__price-text">
                          &#47;&nbsp;night
                        </span>
                      </div>
                      <button
                        className="place-card__bookmark-button button"
                        type="button"
                      >
                        <svg
                          className="place-card__bookmark-icon"
                          width="18"
                          height="19"
                        >
                          <use href="#icon-bookmark" />
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{ width: "100%" }}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Nice, cozy, warm big bed apartment</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>
              </div> */}
            </section>
          </div>
        </main>
      </div>
    );
}

export default OfferPage;
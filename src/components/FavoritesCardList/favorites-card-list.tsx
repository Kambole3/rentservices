import { OffersList } from "../../types/offer"
import FavoritesCard from "../favorites/favorites-card";


type FavoritesCardListProps ={
    favoritesList: OffersList[]; 
}

function FavoritesCardList({favoritesList}: FavoritesCardListProps) {
    const cities: String[]= Array.from(new Set(favoritesList.map((f)=>f.city.name)));
    return (
        <div className="favorites__list">
            {Array.from(cities,(city)=>{
                return <div className="favorites__locations-items">
                    <div key={"City"+ city} className="favorites__locations locations locations--current">
                        <div className="locations__item">
                            <a className="locations__item-link" href="#">
                            <span>{city}</span>
                            </a>
                        </div>
                    </div>
                    <div className="favorites__places">
                        {Array.from(favoritesList.filter((f)=>f.city.name==city),(item)=><FavoritesCard key={item.id} id={item.id} title={item.title} type={item.type} price={item.price} isPremium={item.isPremium} previewImage={item.previewImage} rating={item.rating} location={item.city.name}/>)}
                    </div>
                </div>
            })}
        </div>

        // 
    );
}

export {FavoritesCardList}
import { BlockName } from "../../types/blockName";
import { OffersList } from "../../types/offer"
import CitiesCard from "../cities-card/cities-card";


type CitiesCardListProps ={
    offersList: OffersList[];
    onListItemHover?: (offerId: string) => void;
    block: string;
}

function CitiesCardList({block, offersList, onListItemHover}: CitiesCardListProps) {
    return (
        // {`${block.includes('cities') ? BlockName.AllPages : BlockName.NearOfferList} places__list`}
        
        <div className="cities__places-list places__list tabs__content">
            {Array.from(offersList,(item)=><CitiesCard key={item.id} id={item.id} title={item.title} type={item.type} price={item.price} isPremium={item.isPremium} previewImage={item.previewImage} rating={item.rating}/>)}
        </div>
    );
}

export {CitiesCardList}
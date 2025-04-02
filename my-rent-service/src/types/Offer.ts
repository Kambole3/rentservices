type OfferLocation ={
    latitude: number;
    longitude:number;
    zoom:number;
};
type CityOffer={
    name:string;
    location:OfferLocation;
};
type HostOffer = {
    name:string;
    avatarUrl:string;
    isPro:boolean;
};
import { Review } from "../types/review";

const reviews: Review[] = [
  {
    id: "1",
    comment: "A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.",
    date: "2025-03-25T21:00:00.456Z",
    rating: 4,
    user: {
      name: "pips",
      avatarUrl: "/img/avatar.svg",
      isPro: true
    }
  },
  {
    id: "2",
    comment: "The place was clean and had nice furniture. I love the customer service too",
    date: "2025-02-15T12:34:56.789Z",
    rating: 5,
    user: {
      name: "izu",
      avatarUrl: "/img/avatar.svg",
      isPro: false
    }
  }
];

export { reviews };
import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    id: "1",
    title: "Luxury Apartment in Downtown",
    type: "apartment",
    price: 250,
    city: {
      name: "Paris",
      location: {
        latitude: 48.8584,
        longitude: 2.2945,
        zoom: 12
    }
},
location: {
    latitude: 48.8584,
    longitude: 2.2945,
    zoom: 12
},
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: "uptown",
    bedrooms: 2,
    goods: ["Wi-Fi", "Air conditioning", "Kitchen", "TV"],
    host: {
      name: "kane",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true
    },
    images: ["/img/apartment-03.jpg"],
    maxAdults: 4,
    previewImage: "/img/apartment-03.jpg"
  },
  {
    id: "2",
    title: "candles ",
    type: "house",
    price: 150,
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8467,
        longitude: 4.3525,
        zoom: 10
    }
},
location: {
    latitude: 50.8467,
    longitude: 4.3525,
    zoom: 10
},
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    description: "the best of the best.",
    bedrooms: 3,
    goods: ["Parking", "Garden", "Fireplace", "Wi-Fi"],
    host: {
      name: "Jane Smith",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: false
    },
    images: ["/img/apartment-02.jpg"],
    maxAdults: 6,
    previewImage: "/img/apartment-02.jpg"
  },
  {
    id: "3",
    title: "Beachfront Villa with Ocean View",
    type: "villa",
    price: 500,
    city: {
      name: "Cologne",
      location: {
        latitude: 50.9413,
        longitude: 6.9583,
        zoom: 13
    }
},
location: {
    latitude: 50.9413,
    longitude: 6.9583,
    zoom: 13
},
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    description: "A luxurious beachfront villa offering stunning ocean views and direct access to the beach.",
    bedrooms: 5,
    goods: ["Private pool", "Wi-Fi", "Jacuzzi", "Beach access"],
    host: {
      name: "jacob",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: true
    },
    images: ["/img/apartment-01.jpg"],
    maxAdults: 10,
    previewImage: "/img/apartment-01.jpg"
  },
  // New Amsterdam properties
  {
    id: "4",
    title: "Central Amsterdam Apartment",
    type: "apartment",
    price: 180,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    description: "Beautiful apartment in the heart of Amsterdam, close to museums and canals.",
    bedrooms: 1,
    goods: ["Wi-Fi", "Kitchen", "Washing machine", "TV"],
    host: {
      name: "willo",
      avatarUrl: "/img/avatar.svg",
      isPro: true
    },
    images: ["/img/amsterdam.jpg", "/img/apartment-01.jpg"],
    maxAdults: 2,
    previewImage: "/img/amsterdam.jpg"
  },
  {
    id: "5",
    title: "Quaint Amsterdam Townhouse",
    type: "house",
    price: 220,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: "Charming townhouse in a quiet Amsterdam neighborhood with canal views.",
    bedrooms: 2,
    goods: ["Wi-Fi", "Kitchen", "Bike rental", "Coffee maker"],
    host: {
      name: "Anna de Vries",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: false
    },
    images: ["/img/amsterdam.jpg"],
    maxAdults: 4,
    previewImage: "/img/apartment-01.jpg"
  },
  {
    id: "6",
    title: "Modern Amsterdam Loft",
    type: "apartment",
    price: 195,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    description: "Stylish loft with modern amenities in Amsterdam's vibrant district.",
    bedrooms: 1,
    goods: ["Wi-Fi", "Air conditioning", "Workspace", "Sound system"],
    host: {
      name: "Mike",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true
    },
    images: ["/img/apartment-03.jpg"],
    maxAdults: 2,
    previewImage: "/img/apartment-01.jpg"
  },
  {
    id: "7",
    title: "Spacious Amsterdam Family Home",
    type: "house",
    price: 300,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    description: "Large family home with garden in a residential area of Amsterdam.",
    bedrooms: 3,
    goods: ["Wi-Fi", "Kitchen", "Garden", "Washing machine", "Parking"],
    host: {
      name: "Angelina Bakker",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: false
    },
    images: ["/img/amsterdam.jpg"],
    maxAdults: 6,
    previewImage: "/img/apartment-03.jpg"
  },
  {
    id: "8",
    title: "Modern Humburg Apartment Near the Harbor",
    type: "apartment",
    price: 220,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.557834,
      longitude: 9.994579,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    description: "Stylish apartment with harbor views, close to the Elbphilharmonie.",
    bedrooms: 2,
    goods: ["Wi-Fi", "Kitchen", "Balcony", "Washing machine", "TV"],
    host: {
      name: "klod",
      avatarUrl: "/img/avatar.svg",
      isPro: true
    },
    images: ["/img/amsterdam.jpg"],
    maxAdults: 4,
    previewImage: "/img/amsterdam.jpg"
  },
  {
    id: "9",
    title: "Cozy Townhouse in St. Pauli",
    type: "house",
    price: 180,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.554123,
      longitude: 9.978456,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    description: "Charming townhouse in the lively St. Pauli district, near nightlife.",
    bedrooms: 3,
    goods: ["Wi-Fi", "Kitchen", "Heating", "Coffee maker", "Iron"],
    host: {
      name: "Sophie Weber",
      avatarUrl: "/img/avatar.svg",
      isPro: false
    },
    images: ["/img/apartment-03.jpg"],
    maxAdults: 5,
    previewImage: "/img/apartment-03.jpg"
  },
  {
    id: "10",
    title: "Luxury Penthouse with Alster Lake View",
    type: "apartment",
    price: 450,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.560789,
      longitude: 9.987654,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    description: "High-end penthouse with panoramic views of Alster Lake.",
    bedrooms: 4,
    goods: ["Wi-Fi", "Kitchen", "Air conditioning", "Jacuzzi", "Parking"],
    host: {
      name: "Thomas Fischer",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true
    },
    images: ["/img/apartment-01.jpg"],
    maxAdults: 6,
    previewImage: "/img/apartment-01.jpg"
  },



  {
    id: "11",
    title: "Bohemian Artist's Atelier in Montmartre",
    type: "house",
    price: 280,
    city: {
      name: "Paris",
      location: {
        latitude: 48.8584,
        longitude: 2.2945,
        zoom: 12
      }
    },
    location: {
      latitude: 48.8867,
      longitude: 2.3430,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    description: "Historic atelier with exposed beams and a rooftop terrace. Once owned by a Post-Impressionist painter.",
    bedrooms: 2,
    goods: ["Wi-Fi", "Skylights", "Art supplies", "Vinyl collection"],
    host: {
      name: "Élodie Rousseau",
      avatarUrl: "/img/avatar.svg",
      isPro: true
    },
    images: ["/img/paris-atelier.jpg", "/img/apartment-01.jpg", "/img/apartment-02.jpg"],
    maxAdults: 3,
    previewImage: "/img/paris-atelier.jpg"
  },
  {
    id: "12",
    title: "Luxury Haussmannian Apartment",
    type: "apartment",
    price: 400,
    city: {
      name: "Paris",
      location: {
        latitude: 48.8584,
        longitude: 2.2945,
        zoom: 12
      }
    },
    location: {
      latitude: 48.8720,
      longitude: 2.3001,
      zoom: 12
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    description: "Ornate 19th-century apartment with parquet floors, chandeliers, and a private elevator. Near Opéra Garnier.",
    bedrooms: 3,
    goods: ["Wi-Fi", "Bose sound system", "Marble bathroom", "Concierge service"],
    host: {
      name: "Thierry Laurent",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true
    },
    images: ["/img/paris-haussmann.jpg", "/img/apartment-01.jpg", "/img/apartment-02.jpg"],
    maxAdults: 5,
    previewImage: "/img/paris-haussmann.jpg"
  },
  {
    id: "13",
    title: "Houseboat on the Seine",
    type: "house",
    price: 190,
    city: {
      name: "Paris",
      location: {
        latitude: 48.8584,
        longitude: 2.2945,
        zoom: 12
      }
    },
    location: {
      latitude: 48.8500,
      longitude: 2.3600,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    description: "Quirky houseboat with a sun deck and panoramic windows. Experience Paris from the water!",
    bedrooms: 1,
    goods: ["Wi-Fi", "Kayak rental", "Compact kitchen", "Hammock"],
    host: {
      name: "Jean-Paul Lefèvre",
      avatarUrl: "/img/avatar.svg",
      isPro: false
    },
    images: [ "/img/apartment-01.jpg","/img/paris-haussmann.jpg", "/img/paris-atelier.jpg" ],
    maxAdults: 2,
    previewImage: "/img/apartment-01.jpg"
  },

  // New Brussels objects
  {
    id: "14",
    title: "EU District Modern Loft",
    type: "apartment",
    price: 230,
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8467,
        longitude: 4.3525,
        zoom: 10
      }
    },
    location: {
      latitude: 50.8400,
      longitude: 4.3800,
      zoom: 10
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.6,
    description: "Sleek loft with designer furniture, ideal for business travelers. Walking distance to European Parliament.",
    bedrooms: 1,
    goods: ["Wi-Fi", "Standing desk", "Smart lighting", "Wine cooler"],
    host: {
      name: "Sophie Martin",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: true
    },
    images: ["/img/brussels-chocolate.jpg", "/img/apartment-03.jpg", "/img/apartment-01.jpg"],
    maxAdults: 2,
    previewImage: "/img/brussels-chocolate.jpg"
  },
  {
    id: "15",
    title: "Comic Book-Themed Flat",
    type: "apartment",
    price: 160,
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8467,
        longitude: 4.3525,
        zoom: 10
      }
    },
    location: {
      latitude: 50.8500,
      longitude: 4.3600,
      zoom: 10
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    description: "Playful space decorated with Tintin and Smurf murals. Includes a vintage comic collection.",
    bedrooms: 2,
    goods: ["Wi-Fi", "Board games", "Projector", "Bean bags"],
    host: {
      name: "Georges Remi",
      avatarUrl: "/img/avatar.svg",
      isPro: false
    },
    images: ["/img/apartment-04.jpg", "/img/apartment-05.jpg", "/img/apartment-06.jpg"],
    maxAdults: 4,
    previewImage: "/img/apartment-04.jpg"
  },
  {
    id: "16",
    title: "Chocolate Maker's Guesthouse",
    type: "house",
    price: 195,
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8467,
        longitude: 4.3525,
        zoom: 10
      }
    },
    location: {
      latitude: 50.8350,
      longitude: 4.3450,
      zoom: 10
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: "Stay above a historic chocolate shop with free tastings. Smells like heaven!",
    bedrooms: 2,
    goods: ["Wi-Fi", "Chocolate fountain", "Private courtyard", "Bike rental"],
    host: {
      name: "Marie Delfosse",
      avatarUrl: "/img/avatar.svg",
      isPro: true
    },
    images: ["/img/apartment-06.jpg", "/img/apartment-01.jpg", "/img/apartment-02.jpg"],
    maxAdults: 3,
    previewImage: "/img/apartment-05.jpg"
  },

  // New Humburg objects
  {
    id: "17",
    title: "Speicherstadt Warehouse Conversion",
    type: "apartment",
    price: 240,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.5450,
      longitude: 9.9900,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    description: "Industrial-chic loft in a UNESCO-listed warehouse, with exposed brick and steel beams.",
    bedrooms: 1,
    goods: ["Wi-Fi", "High ceilings", "Vintage typewriter", "Record player"],
    host: {
      name: "Heinrich Vogel",
      avatarUrl: "/img/avatar.svg",
      isPro: true
    },
    images: ["/img/apartment-06.jpg", "/img/apartment-03.jpg", "/img/apartment-05.jpg"],
    maxAdults: 2,
    previewImage: "/img/apartment-06.jpg"
  },
  {
    id: "18",
    title: "Beach Cabin in Blankenese",
    type: "house",
    price: 210,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.5600,
      longitude: 9.8000,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: "Cozy wooden cabin steps from the Elbe River beach. Watch ships sail by from your porch.",
    bedrooms: 2,
    goods: ["Wi-Fi", "Fire pit", "Kayaks", "Picnic basket"],
    host: {
      name: "Lena Schröder",
      avatarUrl: "/img/avatar.svg",
      isPro: false
    },
    images: ["/img/apartment-07.jpg", "/img/apartment-03.jpg", "/img/apartment-02.jpg"],
    maxAdults: 4,
    previewImage: "/img/apartment-07.jpg"
  },
  {
    id: "19",
    title: "Elbphilharmonie View Penthouse",
    type: "apartment",
    price: 500,
    city: {
      name: "Humburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.5410,
      longitude: 9.9830,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    description: "Ultra-modern penthouse with a glass-walled living room facing Humburg's iconic concert hall.",
    bedrooms: 3,
    goods: ["Wi-Fi", "Sonos system", "Rainfall shower", "Private elevator"],
    host: {
      name: "Oliver Fischer",
      avatarUrl: "/img/avatar.svg",
      isPro: true
    },
    images: ["/img/apartment-07.jpg", "/img/apartment-03.jpg", "/img/apartment-06.jpg"],
    maxAdults: 6,
    previewImage: "/img/apartment-03.jpg"
  },

  // New Cologne objects
  {
    id: "20",
    title: "Romanesque Church View Flat",
    type: "apartment",
    price: 180,
    city: {
      name: "Cologne",
      location: {
        latitude: 50.9413,
        longitude: 6.9583,
        zoom: 13
      }
    },
    location: {
      latitude: 50.9380,
      longitude: 6.9500,
      zoom: 13
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    description: "Sunny flat overlooking St. Andrew’s Church. Hear the bells chime from your breakfast nook.",
    bedrooms: 1,
    goods: ["Wi-Fi", "Balcony", "Vintage books", "French press"],
    host: {
      name: "Petra Klein",
      avatarUrl: "/img/avatar-petra.jpg",
      isPro: false
    },
    images: ["/img/paris-atelier.jpg", "/img/apartment-03.jpg", "/img/apartment-01.jpg", "/img/apartment-02.jpg"],
    maxAdults: 2,
    previewImage: "/img/paris-atelier.jpg"
  },
  {
    id: "21",
    title: "Brewery District Loft",
    type: "apartment",
    price: 195,
    city: {
      name: "Cologne",
      location: {
        latitude: 50.9413,
        longitude: 6.9583,
        zoom: 13
      }
    },
    location: {
      latitude: 50.9350,
      longitude: 6.9650,
      zoom: 13
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    description: "Loft in a converted brewery with original fermentation tanks repurposed as decor. Includes Kölsch beer tasting.",
    bedrooms: 2,
    goods: ["Wi-Fi", "Industrial decor", "Beer fridge", "Board games"],
    host: {
      name: "Dieter Schmitz",
      avatarUrl: "/img/avatar-dieter.jpg",
      isPro: true
    },
    images: ["/img/apartment-06.jpg", "/img/apartment-05.jpg", "/img/apartment-07.jpg"],
    maxAdults: 4,
    previewImage: "/img/apartment-06.jpg"
  },
  {
    id: "22",
    title: "Rheinau Harbor Container Home",
    type: "house",
    price: 170,
    city: {
      name: "Cologne",
      location: {
        latitude: 50.9413,
        longitude: 6.9583,
        zoom: 13
      }
    },
    location: {
      latitude: 50.9300,
      longitude: 6.9700,
      zoom: 13
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
    description: "Upcycled shipping container with a rooftop deck for watching Rhine River barges drift by.",
    bedrooms: 1,
    goods: ["Wi-Fi", "Solar-powered", "Hammock", "Bicycle included"],
    host: {
      name: "Anja Weber",
      avatarUrl: "/img/avatar-anja.jpg",
      isPro: false
    },
    images: ["/img/apartment-02.jpg","/img/apartment-01.jpg", "/img/apartment-04.jpg","/img/apartment-03.jpg"],
    maxAdults: 2,
    previewImage: "/img/apartment-02.jpg"
  }

];

export default offers;
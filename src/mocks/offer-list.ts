import { OffersList } from "../types/offer";


export const offersList: OffersList[] =  [
    {
      id: "1",
      title: "downtown",
      type: "apartment",
      price: 250,
      city: {
        name: "Paris",
        location: {
          latitude: 88.6784,
          longitude: 7.3445,
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
      previewImage: "/img/apartment-03.jpg"
    },
    {
      id: "2",
      title: "at the lake",
      type: "house",
      price: 150,
      city: {
        name: "jolie",
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
      previewImage: "/img/apartment-02.jpg"
    },
    {
      id: "3",
      title: "we outsie",
      type: "villa",
      price: 500,
      city: {
        name: "kse",
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
      previewImage: "/img/apartment-01.jpg"
    },
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
      previewImage: "/img/apartment-01.jpg"
    },
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
      previewImage: "/img/apartment-05.jpg"
    },
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
      previewImage: "/img/apartment-03.jpg"
    },
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
      previewImage: "/img/apartment-02.jpg"
    }
  ];
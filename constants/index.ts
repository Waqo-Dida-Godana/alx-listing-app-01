export const API_BASE_URL = 'https://api.example.com';
export const APP_NAME = 'ALX Listing App';

export const PROPERTYLISTINGSAMPLE = [
  {
    name: 'Cozy Apartment',
    rating: 4.5,
    address: {
      city: 'New York',
      country: 'USA',
    },
    image: '/assets/1.jpg',
    images: ['/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg'],
    description: 'A beautiful cozy apartment in the heart of New York.',
    category: ['WiFi', 'Kitchen', 'Air conditioning'],
    reviews: [
      {
        avatar: '/assets/avatar1.jpg',
        name: 'John Doe',
        rating: 5,
        comment: 'Amazing place!',
      },
      {
        avatar: '/assets/avatar2.jpg',
        name: 'Jane Smith',
        rating: 4,
        comment: 'Very comfortable.',
      },
    ],
    price: 100,
    host: {
      name: 'Host Name',
      description: 'Friendly host with great recommendations.',
    },
  },
];

import { IDateType } from 'date-types';
const dateTypes: IDateType[] = [
  {
    id: 'date-types',
    question:
      'Choose a card and click to reveal! The selected card will determine our exciting Date ahead...',
    label: '',
    options: [
      {
        id: 'pamper-date',
        question:
          'Choose a card and click to discover! The selected card will reveal the Pampering Date in store for us...',
        label: 'PAMPER DATE',
        options: [
          {
            id: 'spa',
            question:
              "Select a card and click it. Your chosen card will reveal the Spa we'll be visiting!",
            label: 'SPA',
            options: [
              {
                id: 'wensha',
                label: 'Wensha Spa',
              },
              {
                id: 'nuat-thai',
                label: 'Nuat Thai',
              },
              {
                id: 'thai-royale',
                label: 'Thai Royale Spa',
              },
            ],
          },
          {
            id: 'salon',
            question:
              "Select a card and click it. Your chosen card will reveal the Salon we'll be visiting!",
            label: 'SALON',
            options: [
              {
                id: 't-and-j',
                label: 'T&J Salon Professionals',
              },
              {
                id: 'new-lounge',
                label: 'New Lounge',
              },
              {
                id: 'nora',
                label: 'NORA Hair Salon',
              },
            ],
          },
          {
            id: 'spa-salon',
            question:
              "Select a card and click it. Your chosen card will reveal the Spa & Salon we'll be visiting!",
            label: 'Spa & Salon - Your Selection',
            options: [
              {
                id: 'your-spa-salon-selection',
                label: 'Your Selection',
              },
            ],
          },
        ],
      },
      {
        id: 'shopping-date',
        question:
          'Choose a card and click to discover! The selected card will reveal the shopping date in store for us...',
        label: 'SHOPPING DATE',
        options: [
          {
            id: 'online',
            question:
              "Select a card and click it. Your chosen card will reveal the Online Shop we'll be checking!",
            label: 'Online Shopping',
            options: [
              {
                id: 'shopee',
                label: 'Shopee',
              },
              {
                id: 'lazada',
                label: 'Lazada',
              },
              {
                id: 'shein',
                label: 'SHEIN',
              },
            ],
          },
          {
            id: 'mall-shopping',
            question:
              "Select a card and click it. Your chosen card will reveal the Mall we'll be visiting!",
            label: 'Mall Shopping',
            options: [
              {
                id: 'your-mall-selection',
                label: 'Your Selection',
              },
              {
                id: 'vertis',
                label: 'Vertis North',
              },
              {
                id: 'podium',
                label: 'The Podium',
              },
            ],
          },
          {
            id: 'window-shopping',
            question:
              "Select a card and click it. Your chosen card will reveal the Mall we'll be seeing!",
            label: 'Window Shopping',
            options: [
              {
                id: 'greenbelt',
                label: 'Greenbelt',
              },
              {
                id: 'market-market',
                label: 'Market! Market!',
              },
              {
                id: 'glorietta',
                label: 'Glorietta',
              },
            ],
          },
        ],
      },
      {
        id: 'staycation-date',
        question:
          'Choose a card and click to discover! The selected card will reveal the staycation date in store for us...',
        label: 'STAYCATION DATE',
        options: [
          {
            id: 'purico-cabin',
            label: 'Purico’s Cabin Resort ',
          },
          {
            id: 'scenery',
            label: 'Scenery Resort & Spa Antipolo/Tagaytay',
          },
          {
            id: 'your-staycation-selection',
            label: 'Your Selection',
          },
          {
            id: 'cielo-alto',
            label: 'Cielo Alto',
          },
        ],
      },
    ],
  },
];

export default dateTypes;

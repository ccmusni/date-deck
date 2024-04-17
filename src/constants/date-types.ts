import { IDateType } from 'date-types';
const dateTypes: IDateType[] = [
  {
    id: 'date-types',
    question:
      'Choose a card and click to reveal! The selected card will determine our exciting Date ahead...',
    label: '',
    options: [
      {
        id: 'pamper',
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
                id: 'your-salon-selection',
                label: 'Your Selection',
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
            label: 'Spa & Salon',
          },
        ],
      },
      {
        id: 'shop',
        question:
          'Choose a card and click to discover! The selected card will reveal the shopping date in store for us...',
        label: 'SHOPPING DATE',
        options: [
          {
            id: 'greenbelt',
            label: 'Greenbelt',
          },
          {
            id: 'alabang',
            label: 'Alabang Town Center',
          },
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
        id: 'staycation',
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

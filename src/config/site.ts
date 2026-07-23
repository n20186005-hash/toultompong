// Central attraction data for Toul Tompong Market (Russian Market)
export const BASE = 'https://toultompongmarket.com';

export const siteConfig = {
  slug: 'toul-tompong-market-russian-market',

  name: {
    km: 'ផ្សារទួលទំពូង',
    en: 'Toul Tompong Market',
    zh: '金边图尔通蓬市场',
  },

  // Google Maps (opens at the market coordinates)
  mapsUrl: 'https://www.google.com/maps?q=11.5317,104.9170',
  embedUrl: 'https://www.google.com/maps?q=11.5317,104.9170&output=embed',

  lat: 11.5317,
  lng: 104.9170,
  plusCode: '6P25CXP8+QV',

  rating: 4.1,
  reviewCount: 8435,

  address: 'Corner of St.163 and St.440, Phnom Penh 12310, Cambodia',

  phone: '+855 15 222 930',
  hours: '06:00 - 16:30',
  hoursDaily: {
    km: 'រាល់ថ្ងៃ ០៦:០០ - ១៦:៣០',
    en: 'Daily 06:00 - 16:30',
    zh: '每日 06:00 - 16:30',
  },

  sameAs: ['https://www.google.com/maps?q=11.5317,104.9170'],

  gallery: Array.from(
    { length: 18 },
    (_, i) => `/gallery/toul-tompong-market-${i + 1}.jpg`
  ),
};

export const galleryImages = siteConfig.gallery;

// Central attraction data for Toul Tompong Market (Russian Market)
export const BASE = 'https://toultompong.com';

export const siteConfig = {
  slug: 'toul-tompong-market-russian-market',

  name: {
    km: 'ផ្សារទួលទំពូង',
    en: 'Toul Tompong Market',
    zh: '金边图尔通蓬市场',
  },

  // Google Maps (opens at the market — official short link)
  mapsUrl: 'https://maps.app.goo.gl/ig7kDySgZS68HGQBA',
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.1544666573996!2d104.91216281223512!3d11.540774988611023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951b2c14da4f3%3A0x9ee2eccfc11a8f33!2sToul%20Tompong%20Market%20(Russian%20Market)!5e0!3m2!1szh-CN!2sus!4v1784800884643!5m2!1szh-CN!2sus',

  lat: 11.540774988611023,
  lng: 104.91216281223512,
  plusCode: '6P25CXP8+QV',

  rating: 4.1,
  reviewCount: 8482,

  address: 'Corner of St.163 and St.440, Phnom Penh 12310, Cambodia',

  phone: '+855 15 222 930',
  hours: '06:00 - 16:30',
  hoursDaily: {
    km: 'រាល់ថ្ងៃ ០៦:០០ - ១៦:៣០',
    en: 'Daily 06:00 - 16:30',
    zh: '每日 06:00 - 16:30',
  },

  sameAs: ['https://maps.app.goo.gl/ig7kDySgZS68HGQBA'],

  govTourismUrl: 'https://www.tourismcambodia.com/',

  gallery: Array.from(
    { length: 18 },
    (_, i) => `/gallery/toul-tompong-market-${i + 1}.jpg`
  ),
};

export const galleryImages = siteConfig.gallery;

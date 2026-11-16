/** English-first, editorial guides. Each record answers a separate visitor question. */
export interface Guide {
  slug: string;
  title: string;
  description: string;
  lead: string;
  sections: { heading: string; body: string }[];
  steps: string[];
  faq: { q: string; a: string }[];
}

export const guides: Guide[] = [
  {
    slug: 'russian-market-shopping-guide', title: 'Russian Market Phnom Penh Shopping Guide',
    description: 'Plan a shopping visit to Russian Market: explore stalls, compare quality, carry cash and navigate the covered aisles.',
    lead: 'Russian Market, also called Phsar Tuol Tom Pong, is an indoor maze of clothing, household goods, crafts and food stalls. The most useful shopping strategy is to browse before buying.',
    sections: [
      { heading: 'What you will find', body: 'Different aisles specialise in textiles, garments, small souvenirs, accessories, household items and local produce. Inventory varies by vendor and day; do not expect every stall to stock a specific item.' },
      { heading: 'How to compare stalls', body: 'Look at stitching, dimensions, materials and condition before discussing a price. Ask whether the quoted amount is for one item or a set. When buying several pieces, agree on the total before paying.' },
      { heading: 'Cash and comfort', body: 'Bring small Cambodian riel notes and confirm whether a vendor accepts US dollars or electronic payments. Covered aisles can feel warm and crowded, so carry water and keep valuables secure.' },
    ],
    steps: ['Start at the main street-side entrance and note a landmark.', 'Browse two or three aisles before deciding what to purchase.', 'Compare materials and ask for a total price.', 'Finish with a food or drink stop before returning to your original entrance.'],
    faq: [{ q: 'Is this primarily a souvenir market?', a: 'No. It combines visitor-oriented souvenirs with everyday shopping and fresh-food areas.' }, { q: 'Can I pay by card?', a: 'Do not assume card payment is available at individual stalls; ask first and have cash as a fallback.' }],
  },
  {
    slug: 'russian-market-bargaining-tips', title: 'How to Bargain at Russian Market Respectfully',
    description: 'Practical, polite bargaining advice for Russian Market: comparing prices, checking quality and agreeing a final amount.',
    lead: 'Bargaining is possible at some souvenir and clothing stalls, but not every price is negotiable. A calm, friendly conversation works better than treating every transaction as a contest.',
    sections: [
      { heading: 'When bargaining makes sense', body: 'Ask the price first. Souvenirs and apparel may allow some negotiation; food, drinks and clearly marked fixed-price goods often do not. Respect a vendor who declines.' },
      { heading: 'Check the object before the price', body: 'Inspect seams, zips, labels, finish and any flaws. Compare similar objects at a few nearby stalls; apparent bargains can reflect material differences.' },
      { heading: 'Agree in one currency', body: 'Clarify whether the amount is in riel or dollars. Agree on quantity, price and change before completing a purchase. Avoid assuming a published “standard discount” exists.' },
    ],
    steps: ['Greet the seller and ask for the price.', 'Inspect the item and compare similar offers nearby.', 'Make one reasonable counteroffer if the context permits.', 'Accept politely or thank the vendor and move on.'],
    faq: [{ q: 'Should I bargain for meals?', a: 'Generally pay the stated food price unless the vendor invites discussion.' }, { q: 'Is there a fixed percentage to negotiate?', a: 'No reliable universal percentage applies across the market.' }],
  },
  {
    slug: 'russian-market-food-guide', title: 'Food and Drinks at Russian Market',
    description: 'Explore food stalls at Phnom Penh’s Russian Market, with practical advice on choosing dishes, hygiene and busy periods.',
    lead: 'The market contains everyday food and refreshment stalls alongside shopping aisles. Food choices change throughout the day, making a flexible, observant approach useful.',
    sections: [
      { heading: 'What to look for', body: 'Browse stalls serving cooked dishes, snacks, fruit and drinks. Ask what is being prepared today and whether a dish contains ingredients you avoid.' },
      { heading: 'Food-safety habits', body: 'Prefer food cooked thoroughly and served hot, observe how utensils and ingredients are handled, and choose drinking water from sealed containers if uncertain.' },
      { heading: 'Ordering and payment', body: 'Ask the price and portion size before ordering. If you have allergies, explain them clearly; do not assume all vendors share a common English menu.' },
    ],
    steps: ['Walk through the food area to see current options.', 'Choose a stall where preparation practices are visible.', 'Confirm ingredients and cost.', 'Eat in the designated area and dispose of waste appropriately.'],
    faq: [{ q: 'Is vegetarian food guaranteed?', a: 'No. Ask explicitly about meat stock, fish sauce and other ingredients.' }, { q: 'Are food stalls open as late as restaurants?', a: 'Individual stall hours differ and should be checked locally.' }],
  },
  {
    slug: 'russian-market-souvenirs', title: 'Souvenirs to Look For at Russian Market',
    description: 'A buyer’s guide to crafts, textiles and small gifts at Russian Market with quality checks and packing advice.',
    lead: 'Russian Market is known for varied souvenir stalls. Concentrate on choosing an item you genuinely like and can transport safely rather than relying on claims of rarity.',
    sections: [
      { heading: 'Textile and craft browsing', body: 'Look at scarves, fabric goods, bags, decorative pieces and small handmade-style objects. Labels and origin claims vary; ask the seller if local production matters to you.' },
      { heading: 'Evaluate authenticity', body: 'Do not assume older-looking objects are antiques or that branded goods are genuine. Avoid purchasing objects presented as archaeological artifacts or protected cultural property.' },
      { heading: 'Pack for the journey', body: 'Check fragile items for chips, request wrapping, and keep receipts where offered. Confirm airline and customs rules before purchasing sharp, liquid or restricted products.' },
    ],
    steps: ['Set a rough budget and preferred item size.', 'Compare craftsmanship across several stalls.', 'Ask about materials and origin without assuming an answer.', 'Check condition, agree on a price and pack securely.'],
    faq: [{ q: 'Can I find Khmer-made crafts?', a: 'Some sellers offer locally made goods, but verify origin with the individual vendor.' }, { q: 'Are all brand-name goods authentic?', a: 'Authenticity should not be assumed without independent verification.' }],
  },
  {
    slug: 'russian-market-clothing-textiles', title: 'Clothing and Textiles at Russian Market',
    description: 'Find clothing and textile aisles at Russian Market and learn how to check sizing, stitching and fabric quality.',
    lead: 'Garments and textiles are a major reason shoppers visit the market. Stock is mixed, sizing can be inconsistent, and trying an item on may not always be possible.',
    sections: [
      { heading: 'Sizing without assumptions', body: 'Compare measurements against a garment you already own; international size labels may not correspond exactly. Ask whether exchanges are possible before paying.' },
      { heading: 'Inspect fabric and finish', body: 'Check seams, fasteners, hems, stains and loose threads in natural light where possible. Compare fabric weight and care instructions.' },
      { heading: 'Bulk purchases', body: 'If buying multiple items, discuss the total and inspect each piece. Packing for heat and humidity matters when carrying purchases through crowded aisles.' },
    ],
    steps: ['Identify the clothing or textile area.', 'Compare measurements and materials.', 'Inspect each piece carefully.', 'Confirm exchange terms and final payment.'],
    faq: [{ q: 'Can I try clothes on?', a: 'Facilities vary by stall; ask before relying on a fitting room.' }, { q: 'Are prices uniform?', a: 'No. Price and quality can differ among vendors.' }],
  },
  {
    slug: 'russian-market-first-time-visit', title: 'First-Time Visitor Guide to Russian Market',
    description: 'A first-timer’s plan for navigating the market, choosing an entrance, managing heat and exploring without getting lost.',
    lead: 'The market is compact on a map but its interior can feel labyrinthine. Give yourself time to wander, orient using entrances and avoid scheduling a tightly timed visit.',
    sections: [
      { heading: 'Before entering', body: 'Save the market location on your phone and note the street where you enter. The main address is near Streets 163 and 440 in Phnom Penh.' },
      { heading: 'Inside the market', body: 'Aisles can be narrow and warm. Keep bags close, watch your footing and pause at recognisable corners so you can retrace your path.' },
      { heading: 'Leaving and onward travel', body: 'Arrange transport from an identifiable street-side meeting point. Confirm the vehicle and destination with the driver before boarding.' },
    ],
    steps: ['Open the verified Google Maps market pin.', 'Enter from a street you can recognise later.', 'Browse shopping and food zones in an unhurried loop.', 'Exit at the same street or navigate to a clearly named pickup point.'],
    faq: [{ q: 'How long should I plan?', a: 'A quick look may take under an hour, while browsing and eating can take longer; there is no fixed route duration.' }, { q: 'Is there an admission ticket?', a: 'General entry to the public market is ordinarily free; purchases and services are paid separately.' }],
  },
  {
    slug: 'russian-market-with-kids', title: 'Visiting Russian Market with Children',
    description: 'Family-oriented advice for Russian Market: crowded aisles, breaks, food considerations and meeting points.',
    lead: 'Families can visit Russian Market, but crowded, warm aisles require a slower pace and active supervision. Make comfort and an easy exit more important than covering every stall.',
    sections: [
      { heading: 'Choose an easy route', body: 'Start near a visible entrance and keep your route short. Agree on an adult meeting point; small children should remain within reach in congested aisles.' },
      { heading: 'Heat and facilities', body: 'Bring water, use sun protection between streets, and check toilet or changing facilities on arrival rather than assuming they are available or accessible.' },
      { heading: 'Food and purchases', body: 'Ask about ingredients for allergies and choose thoroughly cooked food. Keep sharp souvenirs and fragile goods out of children’s reach.' },
    ],
    steps: ['Set a meeting point at the entrance.', 'Explore one shopping zone.', 'Take a water or snack break.', 'Exit before fatigue makes navigation difficult.'],
    faq: [{ q: 'Is the market stroller-friendly?', a: 'Some narrow or crowded aisles can be difficult for strollers; assess conditions on arrival.' }, { q: 'Are there fixed family facilities?', a: 'Facilities can change, so verify at the site.' }],
  },
  {
    slug: 'russian-market-rainy-day', title: 'Russian Market on a Rainy Day',
    description: 'What to expect when visiting the covered Russian Market during Phnom Penh rain, including entrances and transport.',
    lead: 'Much of Russian Market is covered, making it a possible wet-weather activity. Coverage does not mean every entrance, approach street or aisle stays dry.',
    sections: [
      { heading: 'Plan the approach', body: 'Check current weather before leaving, use a safe pickup point and allow extra travel time. Standing water can affect streets around the market.' },
      { heading: 'Inside the covered areas', body: 'Watch for slippery floors, leaks and congested aisles. Keep electronics and purchases protected in a waterproof bag.' },
      { heading: 'Thunderstorm precautions', body: 'Avoid exposed metal awnings and flooded roads during active thunderstorms. Follow local safety directions and postpone the trip if travel conditions are unsafe.' },
    ],
    steps: ['Check the forecast and route.', 'Arrange transport to a sheltered entrance.', 'Browse indoor aisles while watching floor conditions.', 'Wait for safer conditions before leaving if necessary.'],
    faq: [{ q: 'Is Russian Market completely indoors?', a: 'It has substantial covered areas, but adjoining streets and some edges are exposed.' }, { q: 'Does it close during rain?', a: 'Stall operation can vary with conditions; verify on the day.' }],
  },
  {
    slug: 'russian-market-vs-central-market', title: 'Russian Market vs Central Market in Phnom Penh',
    description: 'Compare Russian Market and Central Market by shopping atmosphere, layout and location to choose where to visit.',
    lead: 'Both are well-known Phnom Penh markets, but they offer different experiences. Russian Market is associated with dense covered aisles and varied textiles and souvenirs; Central Market is famous for its landmark Art Deco building.',
    sections: [
      { heading: 'Atmosphere and layout', body: 'Russian Market has tightly packed, low-roofed aisles with a neighbourhood feel. Central Market (Phsar Thmei) is organised around a distinctive domed structure and radiating wings.' },
      { heading: 'What to prioritise', body: 'Choose Russian Market for a varied, close-up shopping browse. Choose Central Market if architectural sightseeing is important. Both include commercial stalls and changing inventory.' },
      { heading: 'Can you visit both?', body: 'Yes, but they are separate locations; allow for city traffic. Confirm each destination separately in your navigation app and do not use the Russian Market pin for Central Market.' },
    ],
    steps: ['Pick your priority: dense shopping or landmark architecture.', 'Check both market locations and current travel conditions.', 'Visit the first market without rushing.', 'If time allows, travel separately to the second market.'],
    faq: [{ q: 'Are Russian Market and Central Market the same?', a: 'No. They are distinct markets in different parts of Phnom Penh.' }, { q: 'Which is better?', a: 'That depends on whether you value shopping variety, architecture, location or available time.' }],
  },
  {
    slug: 'russian-market-nearby-places', title: 'Places to Visit Near Russian Market',
    description: 'Plan a local Phnom Penh outing around Russian Market, including the Tuol Sleng museum and neighbourhood cafés.',
    lead: 'Russian Market sits in the Tuol Tom Poung area, where cafés and local streets can be explored before or after shopping. More distant city landmarks require a separate trip.',
    sections: [
      { heading: 'Tuol Tom Poung neighbourhood', body: 'Walk surrounding streets to discover cafés and independent eateries, checking individual opening times. Cross roads carefully and respect residential entrances.' },
      { heading: 'Tuol Sleng Genocide Museum', body: 'This important memorial museum is a separate destination in Phnom Penh. Its difficult history calls for respectful conduct and time to absorb the exhibits; verify admission and opening details on the museum’s own channels.' },
      { heading: 'Make a sensible sequence', body: 'Combine shopping with a meal locally, or arrange a separate ride to a museum. Avoid calling every Phnom Penh landmark “walking distance” without checking the route.' },
    ],
    steps: ['Shop at Russian Market.', 'Take a break at a nearby café or restaurant.', 'Choose whether to extend the day to a separate cultural site.', 'Open the correct map destination before travelling onward.'],
    faq: [{ q: 'Is Tuol Sleng inside Russian Market?', a: 'No. It is a separate museum with its own entry and visitor rules.' }, { q: 'Are the cafés part of the market?', a: 'Many are independent businesses on surrounding streets.' }],
  },
  {
    slug: 'russian-market-accessibility', title: 'Accessibility and Comfort at Russian Market',
    description: 'Accessibility planning for Russian Market: narrow aisles, uneven surfaces, heat, rest stops and transport.',
    lead: 'The market is an active traditional shopping space rather than a purpose-built visitor centre. Anyone with limited mobility or sensory sensitivities should plan around variable floor and crowd conditions.',
    sections: [
      { heading: 'Aisles and entrances', body: 'Some aisles are narrow, busy or uneven; obstacles may change as stalls operate. Do not assume continuous step-free passage or universally accessible toilets.' },
      { heading: 'Heat, noise and rest', body: 'The covered interior can be humid and lively. Consider shorter browsing sessions, water breaks and a quieter street-side exit if you feel overwhelmed.' },
      { heading: 'Transport and assistance', body: 'Confirm any accessibility needs directly with your transport provider, and ask on-site staff or vendors about the least obstructed route that day.' },
    ],
    steps: ['Identify a suitable entrance from the street.', 'Check actual aisle conditions before going deeper.', 'Keep a short return route in mind.', 'Leave time for breaks and an accessible pickup.'],
    faq: [{ q: 'Is the entire market wheelchair accessible?', a: 'Full step-free access cannot be guaranteed across all aisles; assess the route on arrival.' }, { q: 'Are there lifts?', a: 'This is predominantly a ground-level market; do not rely on lifts or formal accessibility services.' }],
  },
  {
    slug: 'russian-market-photography-etiquette', title: 'Photography Tips and Etiquette at Russian Market',
    description: 'Learn where and how to photograph Russian Market respectfully, including light, privacy and busy aisles.',
    lead: 'Russian Market offers colourful textiles, layered stall displays and lively street scenes. Good photography here depends as much on courtesy and safe movement as on camera settings.',
    sections: [
      { heading: 'Ask before close-up portraits', body: 'Seek consent before photographing identifiable vendors or customers at close range. Respect a refusal and avoid blocking transactions for a picture.' },
      { heading: 'Work with mixed light', body: 'Covered aisles create a mix of shade and bright entrances. Keep your camera steady and avoid flash near people or fragile merchandise unless invited.' },
      { heading: 'Protect movement and privacy', body: 'Do not set up tripods in narrow routes, photograph payment details, or move goods without permission. Street-side scenes can be easier for wider compositions.' },
    ],
    steps: ['Begin with a wide establishing view near the entrance.', 'Look for patterns in textiles and displays.', 'Ask permission for close-up people shots.', 'Step aside to review photos without obstructing traffic.'],
    faq: [{ q: 'Is photography automatically allowed everywhere?', a: 'No. Individual vendors may decline; always follow requests and any posted rules.' }, { q: 'When is the best light?', a: 'Light changes by weather, aisle and time; test exposure near entrances and shaded passages.' }],
  },
];

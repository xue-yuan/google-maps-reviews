import { Place } from './utils.js';
import { getGeoencoding, getNearbyPlaceID, getPlaceDetail } from './api.js';

const SEARCH_ADDRESS = '台北市';
const SEARCH_RADIUS = 1500;
const SEARCH_KEYWORD = '';

async function main() {
  let reviews = await getReviews(SEARCH_ADDRESS, Place.Restaurant);

  console.log(reviews);
}

async function getReviews(place, searchType) {
  let [lat, lng] = await getGeoencoding(place);
  let places = await getNearbyPlaceID(
    lat,
    lng,
    searchType,
    SEARCH_RADIUS,
    SEARCH_KEYWORD
  );
  return Promise.all(
    places.map(async (place) => ({
      name: place.name,
      reviews: await getPlaceDetail(place.id),
    }))
  );
}

main();

import { Place } from './utils.js';
import { getGeoencoding, getNearbyPlaceID, getPlaceDetail } from './api.js';

async function main() {
  let reviews = await getReviews('台北市', Place.Restaurant);

  console.log(reviews);
}

async function getReviews(place, searchType) {
  let [lat, lng] = await getGeoencoding(place);
  let placeIDs = await getNearbyPlaceID(lat, lng, searchType);
  return Promise.all(placeIDs.map(async (placeID) => getPlaceDetail(placeID)));
}

main();

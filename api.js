import { API_KEY } from './env.js';

export async function getGeoencoding(place) {
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      return [
        data.results[0].geometry.location.lat,
        data.results[0].geometry.location.lng,
      ];
    });
}

export async function getNearbyPlaceID(lat, lng, searchType) {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=${searchType}&key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((result) => result.place_id);
    });
}

export async function getPlaceDetail(placeID) {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeID}&key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.result.reviews.map((review) => review.text);
    });
}

import axios from 'axios';

const api =
  'https://api.artic.edu/api/v1/artworks?fields=id,title,image_id&limit=100';

export const fetchData = (number = 7) => {
  const array = Array.from(Array(number).keys());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
};

export const getPieces = () =>
  axios.get(api).then(({ data }) => {
    return data.data
      .filter((val) => !!val.image_id)
      .map((piece) => ({
        ...piece,
        image: `https://www.artic.edu/iiif/2/${piece.image_id}/full/843,/0/default.jpg`,
      }));
  });

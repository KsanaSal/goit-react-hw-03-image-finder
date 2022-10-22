import axios from 'axios';

export const fetchImages = async () => {
  const API_KEY = '29499204-a77a5df2d9e32bd170e84cd3d';
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12`
  );
  return response.data.hits;
};

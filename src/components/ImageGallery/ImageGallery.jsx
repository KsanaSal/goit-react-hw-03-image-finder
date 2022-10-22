
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ imageList }) => {
  console.log(imageList);
  return (
    <ImageGalleryList>
      {imageList.map(image => {
        return  <ImageGalleryItem key={image.id} image={image} />;
      })}
    </ImageGalleryList>
  );
};

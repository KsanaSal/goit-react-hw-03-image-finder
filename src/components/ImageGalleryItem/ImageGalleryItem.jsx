import { ImageGalleryListItem, ImageListItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({image}) => {
  return (
    <ImageGalleryListItem>
      <ImageListItem src={image.webformatURL} alt={image.tags} />
    </ImageGalleryListItem>
  );
};

import { ImageGalleryListItem, ImageListItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  return (
    <ImageGalleryListItem>
      <ImageListItem
        small={image.webformatURL}
        large={image.largeImageURL}
        alt={image.tags}
      />
    </ImageGalleryListItem>
  );
};

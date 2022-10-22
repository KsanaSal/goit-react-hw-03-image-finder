import PropTypes from 'prop-types';
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

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

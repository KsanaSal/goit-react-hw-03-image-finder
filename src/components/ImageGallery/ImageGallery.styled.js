import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  display: grid;
  justify-content: center;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

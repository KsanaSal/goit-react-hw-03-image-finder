import { Component } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './FetchImages';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    error: null,
    isLoadingImage: false,
  };
  async componentDidMount() {
    try {
      this.setState({ isLoadingImage: true });
      const images = await fetchImages();
      // console.log(response.data.hits);
      this.setState({ images: images });
    } catch (error) {
      // this.setState({ error: error.message });
      Notify.failure('Sorry, wrong request, try reloading the page');
      console.error(error);
    } finally {
      this.setState({ isLoadingImage: false });
    }
  }

  buildSelectImageList = () => {
    console.log(this.state.images);
    return this.state.images.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    }));
  };
  render() {
    console.log(this.state.images);
    const { isLoadingImage } = this.state;
    const imageList = this.buildSelectImageList();
    console.log(imageList);
    return (
      <div
        style={{
          flexDirection: 'column',
          // height: '100vh',
          display: 'flex',
          // marginBottom: 30,
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar />
        {isLoadingImage && <Loader />}
        {!isLoadingImage && (
          <>
            <ImageGallery imageList={imageList} />
            <Button></Button>
          </>
        )}
      </div>
    );
  }
}

import { Component } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './FetchImages';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    error: null,
    isLoadingImage: false,
    searchString: '',
    page: 1,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.searchString !== prevState.searchString) {
      try {
        this.setState({ isLoadingImage: true });
        const images = await fetchImages(
          this.state.searchString,
          this.state.page
        );
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
    if (this.state.page !== prevState.page) {
      try {
        this.setState({ isLoadingImage: true });
        const images = await fetchImages(
          this.state.searchString,
          this.state.page
        );
        // console.log(response.data.hits);
        this.setState(prevState => {
          return { images: [...prevState.images, ...images] };
        });
      } catch (error) {
        // this.setState({ error: error.message });
        Notify.failure('Sorry, wrong request, try reloading the page');
        console.error(error);
      } finally {
        this.setState({ isLoadingImage: false });
        this.scrollToButton();
      }
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

  handleFormSubmit = searchNameImages => {
    this.setState({ searchString: searchNameImages, page: 1 });
    console.log(searchNameImages);
  };

  changePageNumber = pageNumber => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });

    console.log(this.state.page);
    // this.setState({ page: pageNumber + 1 });
  };

  scrollToButton = () => {
    console.log(this.load);
    this.load.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    console.log(this.state);
    const { isLoadingImage } = this.state;
    const imageList = this.buildSelectImageList();
    return (
      <div
        style={{
          flexDirection: 'column',
          display: 'flex',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoadingImage && <Loader />}
        {!isLoadingImage && this.state.images.length > 0 && (
          <>
            <ImageGallery imageList={imageList} />
            
            <Button
              changePage={this.changePageNumber}
              ref={load => {
                this.load = load;
              }}
            />
          </>
        )}
      </div>
    );
  }
}

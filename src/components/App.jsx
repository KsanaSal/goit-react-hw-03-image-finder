import { Component } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchingBar/SearchingBar';
import { fetchImages } from './FetchImages';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    error: null,
    isLoadingImage: false,
    searchString: '',
    page: 1,
    total: 0,
    totalHits: 0,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { searchString, page } = this.state;
    if (searchString !== prevState.searchString || page !== prevState.page) {
      try {
        this.setState({ isLoadingImage: true });
        const images = await fetchImages(
          this.state.searchString,
          this.state.page
        );
        if (searchString !== prevState.searchString) {
          this.setState({
            images: images.hits,
            total: images.total,
            totalHits: images.totalHits,
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          this.setState(prevState => {
            return { images: [...prevState.images, ...images.hits] };
          });
        }
      } catch (error) {
        Notify.failure('Sorry, wrong request, try reloading the page');
        console.error(error);
      } finally {
        this.setState({ isLoadingImage: false });
      }
    }
  }

  buildSelectImageList = () => {
    return this.state.images.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    }));
  };

  handleFormSubmit = searchNameImages => {
    if (searchNameImages !== this.state.searchString) {
      this.setState({ searchString: searchNameImages, page: 1, images: [] });
    }
  };

  changePageNumber = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { isLoadingImage, images, total, page, totalHits } = this.state;
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
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoadingImage && <Loader />}
        <ImageGallery imageList={imageList} />
        {images.length > 0 && total > 12 && totalHits > page * 12 && (
          <>
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

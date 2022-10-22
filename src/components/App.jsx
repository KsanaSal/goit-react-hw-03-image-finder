import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: {},
  };
  componentDidMount() {
    const API_KEY = '29499204-a77a5df2d9e32bd170e84cd3d';
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}=photo&orientation=horizontal&per_page=12`
    )
      .then(result => result.json())
      .then(images => this.setState({images: images.hits}));
  }

  render() {
    console.log(this.state.images);
    return (
      <div
        style={{
          flexDirection: 'column',
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar />
        <ImageGallery />
        <Button></Button>
      </div>
    );
  }
}

import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  AiOutlineSearch,
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchString: '',
  };

  handleOnChange = event => {
    this.setState({ searchString: event.currentTarget.value.toLowerCase() });
    console.log(event.currentTarget.value.toLowerCase());
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchString.trim() === '') {
      Notify.info('Please, write name for the image');
      return;
    }
    this.props.onSubmit(this.state.searchString);
    // this.setState({ searchString: '' });
  };
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <AiOutlineSearch />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            value={this.state.searchString}
            onChange={this.handleOnChange}
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

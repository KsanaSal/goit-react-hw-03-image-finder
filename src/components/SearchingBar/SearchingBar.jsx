import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  AiOutlineSearch,
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchingBar.styled';

export class SearchBar extends Component {
  state = {
    searchString: '',
  };

  handleOnChange = event => {
    this.setState({ searchString: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchString.trim() === '') {
      Notify.info('Please, write name for the image');
      return;
    }
    this.props.onSubmit(this.state.searchString);
  };
  render() {
    return (
      <SearchBarHeader>
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
      </SearchBarHeader>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


import {
    AiOutlineSearch,
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <SearchbarHeader>
      <SearchForm>
              <SearchFormButton type="submit">
              <AiOutlineSearch />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

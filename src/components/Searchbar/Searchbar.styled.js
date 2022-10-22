import styled from 'styled-components';
import { AiOutlineSearch as Search } from 'react-icons/ai';

export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #7404de;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.5;
  }
`;

export const AiOutlineSearch = styled(Search)`
  width: 100%;
  height: 100%;
  color: #101010;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 24px;
  color: #101010;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &::placeholder {
    font: inherit;
    font-size: 24px;
    color: rgba(16, 16, 16, 0.5);
  }
`;

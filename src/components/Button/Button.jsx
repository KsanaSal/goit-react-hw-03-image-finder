import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonMore } from './Button.styled';

export class Button extends Component {
  handleButton = () => {
    this.props.changePage();
  };
  render() {
    return (
      <ButtonMore type="button" onClick={this.handleButton}>
        Load more
      </ButtonMore>
    );
  }
}

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

import { Component } from 'react';
import { ButtonMore } from './Button.styled';

export class Button extends Component {
  handleButton = event => {
      this.props.changePage(1);
      console.log(event);
  };
  render() {
    return (
      <ButtonMore type="button" onClick={this.handleButton}>
        Load more
      </ButtonMore>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import Gameboard from './Gameboard';

class Game extends React.Component {
  state = {
    height: 8,
    width: 8,
    mines: 10,
  };

  render() {
    const { height, width, mines } = this.state;
    return (
      <div className="game">
        <Gameboard height={height} width={width} mines={mines} />
      </div>
    );
  }
}

export default Game;

import React from 'react';
import PropTypes from 'prop-types';

class Gameboard extends React.Component {
  state = {
    boardData: this.initBoardData(this.props.height, this.props.width, this.props.mines),
    gameStatus: false,
    mineCount: this.props.mines,
  };

  render() {
    return (
      <div className="board">
        <div className="game-info">
          <span className="info">
            mines: {this.state.mineCount}
          </span>
          <br />
          <span className="info">
            {this.state.gameStatus}
          </span>
        </div>
        {this.renderBoard(this.state.boardData)}
      </div>
    );
  }
}

Gameboard.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  mines: PropTypes.number,
};

export default Gameboard;

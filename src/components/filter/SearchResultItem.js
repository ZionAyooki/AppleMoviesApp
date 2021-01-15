import React from 'react';

class SearchResultItem extends React.Component {
  render() {
    return (
      <li className="list-group-item" onClick={this.props.handleClick}>
        {this.props.movie.title} ({this.props.movie.year})
      </li>
    );
  }
}

export default SearchResultItem;
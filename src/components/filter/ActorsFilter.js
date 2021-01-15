import React from "react";

class ActorsFilter extends React.Component {
  render() {
    const sortOptions = this.props.sortOptions.map(
      (option) => <option value={option.value} key={option.value}>{option.name}</option>
    );
    return (
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-sm-6 col-md-3 mb-2">
          <label htmlFor="filter" className="form-label">Filter</label>
          <input id="filter" className="form-control" type="text" placeholder="Filter" value={this.props.filter} onChange={this.props.filterChange} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-2">
          <label htmlFor="sort" className="form-label">Sort by</label>
          <select className="form-select" value={this.props.sortBy} onChange={this.props.sortByChange}>
            {sortOptions}
          </select>
        </div>
      </div>
    );
  }
}

export default ActorsFilter;
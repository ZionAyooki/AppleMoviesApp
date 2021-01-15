import React from "react";
import ActorCard from "./ActorCard";

class ActorsGallery extends React.Component {
  render() {
    const actorsList = this.props.actorsList.map(
      (item, i) => <ActorCard actor={item} key={i} />
    );
    return (
      <div className="actor-list">
        <h2>Search results</h2>
        <p className="text-muted">Total results: {this.props.actorsList.length} actors.</p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {actorsList}
        </div>
      </div>
    );
  }
}

export default ActorsGallery;
import React from "react";

class ActorCard extends React.Component {
  render() {
    const { fName, lName, bday, imgUrl, imdbLink } = this.props.actor;
    return (
      <div className="col mb-3">
        <div className="card">
          <img className="card-img-top" src={imgUrl} alt={`${fName} ${lName}`} />
          <div className="card-body">
            <h3 className="card-title">
              <a href={imdbLink} target="_blank" rel="noopener noreferrer">{fName} {lName}</a>
            </h3>
            <p className="card-text"><strong>Birth date:</strong> {bday.format('MMMM Do, YYYY')}</p>
          </div>
          <div className="card-footer text-center">
            <small className="text-muted">
              <strong>Age:</strong>
              <span className="text-primary"> {this.props.actor.getAge()}</span>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default ActorCard;
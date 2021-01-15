import React from 'react';
import ActorModel from "./ActorModel";
import ActorsFilter from "../filter/ActorsFilter";
import ActorsGallery from "./ActorsGallery";

class ActorsPage extends React.Component {
  constructor(props) {
    super(props);

    this.sortOptions = [
      { name: 'First name', value: 'fName' },
      { name: 'Last name', value: 'lName' },
      { name: 'Oldest to youngest', value: 'old' },
      { name: 'Youngest to oldest', value: 'young' }
    ];

    this.state = {
      actors: [],
      filter: '',
      sortBy: this.sortOptions[0].value
    };
  }

  componentDidMount = () => {
    fetch('/actorsData.json')
      .then(response => response.json())
      .then((data) => {
        const actorList = data.map((actor) => {
          return new ActorModel(actor.fName, actor.lName, actor.bday, actor.imgUrl, actor.imdbLink);
        });
        this.setState({
          actors: actorList
        });
      });
  };

  filterChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      filter: newVal
    });
  };

  sortByChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      sortBy: newVal
    });
  };

  filterActors = (filter, sort, actors) => {
    return actors.filter((actor) => {
      const fullName = `${actor.fName} ${actor.lName}`.toLowerCase();
      return fullName.includes(filter.toLowerCase());
    }).sort((a, b) => {
      switch (sort) {
        case 'fName':
          return a.fName.toLowerCase() > b.fName.toLowerCase() ? 1 : -1;
        case 'lName':
          return a.lName.toLowerCase() > b.lName.toLowerCase() ? 1 : -1;
        case 'old':
          return a.bday.diff(b.bday);
        case 'young':
          return b.bday.diff(a.bday);
        default:
          return 0;
      }
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="page-title">Actors birthdays</h1>
        <ActorsFilter
          filter={this.state.filter} filterChange={this.filterChange}
          sortOptions={this.sortOptions} sortBy={this.state.sortBy} sortByChange={this.sortByChange}
        />
        <ActorsGallery
          actorsList={this.filterActors(this.state.filter, this.state.sortBy, this.state.actors)}
        />
      </div>
    );
  }
}

export default ActorsPage;